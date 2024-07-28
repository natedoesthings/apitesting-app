export async function GET(request) {

  const users = [
    {id :  2}
  ]

  return new Response(JSON.stringify(users))
  
}