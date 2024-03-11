export async function GET() {
  const response = await fetch('https://api.origamid.online/vendas', {
    headers: {
      apikey: 'ORIGAMID123456'
    }
  }).then(response => response.json())



  return Response.json(response)
}