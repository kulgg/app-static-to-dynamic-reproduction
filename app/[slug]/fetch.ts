export async function fetchStuff() {
  const headers = { "Content-Type": "application/json" };
  return (
    await fetch("https://spacex-production.up.railway.app/", {
      headers,
      method: "POST",
      body: JSON.stringify({
        query: `query ExampleQuery {
  company {
    ceo
  }
  roadster {
    apoapsis_au
  }
}
`,
      }),
    })
  ).json();
}

export async function thisOneWithGetMethodIsFineToCallFromLayout() {
  const headers = { "Content-Type": "application/json" };
  return (
    await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
      headers,
      method: "GET",
    })
  ).json();
}
