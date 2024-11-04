import type { APIRoute } from 'astro'

const robotsTxt = `
User-agent: *
Allow: /

vjz3r{n0T_5@f3_foR_fL4G}
`.trim()

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
