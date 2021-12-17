import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Teams from '../../Components/TeamFunction/Teams';
import { fetchPlayers } from '../../services/playersRoutes';

export default function TeamList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {/* {teams.map((team) => (
          <li key={team.id}>
            <Teams teams={team} />
          </li>
        ))} */}
        {players.map((player) => (
          <Link key={player.id} to={`/players/${player.id}`}>
            {player.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
