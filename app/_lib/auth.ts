import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/sign-in',
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
            username: { label: "Email", type: "email", placeholder: "email@email.com" },
            password: { label: "Senha", type: "password" }
            },
            async authorize(credentials, req) {
                const res = await fetch("/your/endpoint", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()

                // If no error and we have user data, return it
                if (res.ok && user) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        })
    ]
}