import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Promptopia',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'namkhanh' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // const res = await fetch('/your/endpoint', {
        //   method: 'POST',
        //   body: JSON.stringify(credentials),
        //   headers: { 'Content-Type': 'application/json' },
        // })
        // const user = await res.json()
        const user = { id: '64', name: 'namkhanh', password: 'namkhanh' }

        // If no error and we have user data, return it
        // if (res.ok && user) {
        //   return user
        // }
        // if (user) return user
        if (credentials?.username === user.name && credentials.password === user.password) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      },
    }),
  ],
}
