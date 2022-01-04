import React from 'react';
import { Link } from 'react-router-dom';

export default function Teams({ team: { name, city, state, players } }) {
  return (
    <>
      <div>
        <h1>{name}</h1>
        <h3>{city}</h3>
        <h3>{state}</h3>
      </div>
      <div>
        {players.map((player) => (
          <Link className="players" key={player.id} to={`/players/${player.id}`}>
            {player.name}
          </Link>
        ))}
      </div>
    </>
  );
}
