import React from 'react';
import { Link } from 'react-router-dom';

export default function Teams({ teams }) {
  return (
    <section>
      {teams.map((team) => (
        <div key={team.id}>
          <Link to="/teams/:id">
            <div className="content">
              <h1>{team.name}</h1>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
