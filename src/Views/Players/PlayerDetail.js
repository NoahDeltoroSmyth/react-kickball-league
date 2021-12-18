import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getPlayersById } from '../../services/playersRoutes';

export default function PlayerDetail() {
  const { id } = useParams();
  console.log(id);
  const [players, setPlayers] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const fetchData = async () => {
    getPlayersById(id).then(({ data }) => setPlayers(data));
    // const data = await getTeamsById(props.match.params.id);
    // setLoading(false);
    // };
  }, [id]);
  // if (loading) return <h1>loading</h1>;
  return (
    <div>
      {/* {teams.map((team) => (
        <li key={team}>
          <Teams teams={teams} />
        </li>
      ))} */}
      {players.name}
      {players.position}
    </div>
  );
}
{
  /* <Teams teams={team} /> */
}
