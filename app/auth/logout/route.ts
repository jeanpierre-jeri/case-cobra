import { lucia } from '@/lib/auth'
import { validateRequest } from '@/lib/validate'
import { cookies } from 'next/headers'

export async function GET() {
  const { session } = await validateRequest()
  if (!session) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/'
      }
    })
  }

  await lucia.invalidateSession(session.id)

  const sessionCookie = lucia.createBlankSessionCookie()
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
  return new Response(null, {
    status: 302,
    headers: {
      Location: '/'
    }
  })
}
