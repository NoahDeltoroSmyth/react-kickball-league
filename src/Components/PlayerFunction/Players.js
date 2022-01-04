import React from 'react';
// import { Link } from 'react-router-dom';

export default function Players({ player: { name, position } }) {
  return (
    <>
      <div>
        <h1>{name}</h1>
        <h3>position: {position}</h3>
      </div>
      {/* <div>
        {teams.map((team) => (
          <Link className="teams" key={team.id} to={`/teams/${team.id}`}>
            {team.name}
          </Link>
        ))}
        was trying to link the team name with the player information, but wasn't working for some reason
      </div> */}
    </>
  );
}
