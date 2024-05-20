// src/auth.ts
import { Lucia } from 'lucia'
import { adapter } from './db'

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    // this sets cookies with super long expiration
    // since Next.js doesn't allow Lucia to extend cookie expiration when rendering pages
    expires: false,
    attributes: {
      // set to `true` when using HTTPS
      secure: process.env.NODE_ENV === 'production'
    }
  },
  getUserAttributes(attributes) {
    return {
      github_id: attributes.github_id,
      username: attributes.username,
      avatar_url: attributes.avatar_url
    }
  }
})

interface DatabaseUserAttributes {
  github_id: number
  username: string
  avatar_url: string
}

// IMPORTANT!
declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia
    DatabaseUserAttributes: DatabaseUserAttributes
  }
}
