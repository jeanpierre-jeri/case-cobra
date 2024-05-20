import { lucia } from '@/lib/auth'
import { cookies } from 'next/headers'
import { OAuth2RequestError } from 'arctic'
import { generateIdFromEntropySize } from 'lucia'
import { github } from '@/lib/providers/github'
import { db } from '@/lib/db'

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const state = url.searchParams.get('state')
  const storedState = cookies().get('github_oauth_state')?.value ?? null
  if (!code || !state || !storedState || state !== storedState) {
    return new Response(null, {
      status: 400
    })
  }

  try {
    const tokens = await github.validateAuthorizationCode(code)
    const githubUserResponse = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`
      }
    })
    const githubUser: GitHubUser = await githubUserResponse.json()

    const result = await db.execute({
      sql: 'SELECT id FROM user WHERE github_id = ?',
      args: [githubUser.id]
    })

    const existingUser = result.rows[0]

    if (existingUser) {
      const session = await lucia.createSession(String(existingUser.id), {})
      const sessionCookie = lucia.createSessionCookie(session.id)
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
      return new Response(null, {
        status: 302,
        headers: {
          Location: '/'
        }
      })
    }

    const userId = generateIdFromEntropySize(10) // 16 characters long

    // Replace this with your own DB client.
    await db.execute({
      sql: 'INSERT INTO user (id, github_id, username, avatar_url) VALUES (?, ?, ?, ?)',
      args: [userId, githubUser.id, githubUser.login, githubUser.avatar_url]
    })

    const session = await lucia.createSession(userId, {})
    const sessionCookie = lucia.createSessionCookie(session.id)
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/'
      }
    })
  } catch (e) {
    // the specific error message depends on the provider
    if (e instanceof OAuth2RequestError) {
      // invalid code
      return new Response(null, {
        status: 400
      })
    }
    return new Response(null, {
      status: 500
    })
  }
}

interface GitHubUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: null
  blog: string
  location: null
  email: string
  hireable: null
  bio: null
  twitter_username: null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: Date
  updated_at: Date
}
