import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Players from '../../Components/PlayerFunction/Players';
import { getPlayersById } from '../../services/playersRoutes';

export default function PlayerDetail() {
  const { id } = useParams();
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    getPlayersById(id).then(({ data }) => setPlayers(data));
  }, [id]);
  if (!players) return <h1>loading</h1>;

  return <Players player={players} />;
}
