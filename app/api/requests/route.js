export async function GET(request) {
  

  const requests = [{
    name: "Name 1",
    url: "http:/localhost:3000/api/requests",
    status: 200,
    id: 1,
    json: {
      "name": "Nate",
      "age": 25
    }
  }, {
    name: "Name 5",
    url: "http:/localhost:3000/api/test",
    status: 404,
    id: 2,
    json: {
      "name": "Nate",
      "age": 25
    }
  }, {
    name: "Name 3",
    url: "http:/localhost:3000/api/natedoesthings",
    status: 200,
    id: 3,
    json: {
      "name": "Nate",
      "age": 25
    }
  }, {
    name: "Name 4",
    url: "http:/localhost:3000/api/cool",
    status: 404,
    id: 4,
    json: {
      "name": "Nate",
      "age": 25
    }

  }]



  return new Response(JSON.stringify(requests), {
    headers: { 'Content-Type': 'application/json' },
  });

}