import { LibSQLAdapter } from '@lucia-auth/adapter-sqlite'
import { createClient } from '@libsql/client'

export const db = createClient({
  url: process.env.TURSO_DATABASE_URL || 'file:./db.sqlite',
  authToken: process.env.TURSO_AUTH_TOKEN
})

export const adapter = new LibSQLAdapter(db, {
  user: 'user',
  session: 'session'
})
