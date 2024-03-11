export async function GET() {
  return Response.json({ data: [{ name: 'Anderson Nascimento' }, { name: 'Carol Nascimento' }], method: 'GET', page: 'users' })
}