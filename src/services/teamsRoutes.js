export async function fetchTeams() {
  const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/teams?`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  console.log(resp);
  const data = await resp.json();
  return data;
}

//When dealing with unexpected token at < json position 0 check url and keys, restart server, log response to see what's coming thru.
