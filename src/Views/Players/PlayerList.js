import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPlayers } from '../../services/playersRoutes';

export default function TeamList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="player-list">
      {players.map((player) => (
        <Link className="players" key={player.id} to={`/players/${player.id}`}>
          {player.name}
        </Link>
      ))}
    </div>
  );
}
