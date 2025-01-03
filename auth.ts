import { client } from '@/sanity/lib/client';
import { writeClient } from '@/sanity/lib/writeClient';
import { AUTHOR_BY_GOOGLE_EMAIL_QUERY } from './sanity/lib/queries';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        })
    ],
    callbacks: {
        async signIn({ user: { name, email, image }}) {
            const existingUser = await client
                .withConfig({ useCdn: false })
                .fetch(AUTHOR_BY_GOOGLE_EMAIL_QUERY, { email: email })
            if (!existingUser) {
                await writeClient.create({
                    _type: 'author',
                    name,
                    email,
                    image,
                })
            }
            return true
        },
        async jwt({ token, account, profile }) {
            if (account && profile) {
                const user = await client
                    .withConfig({ useCdn: false })
                    .fetch(AUTHOR_BY_GOOGLE_EMAIL_QUERY, { email: profile?.email })
                token.id = user?._id
            }
            return token
        },
        async session({ session, token }) {
            Object.assign(session, { id: token.id })
            return session
        }
    },
});
