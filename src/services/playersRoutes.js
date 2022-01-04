import client from './client';

export async function fetchPlayers() {
  const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/players?`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await resp.json();
  return data;
}
//This route from LOTR or the route from Library?

export async function getPlayersById(id) {
  let request = await client.from('players').select(`*, teams(*)`).match({ id }).single();
  return request;
}
