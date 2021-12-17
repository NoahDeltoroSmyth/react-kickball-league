import React from 'react';
import { Link } from 'react-router-dom';

export default function Teams({ teams: { id, name, city, state }, showDetails = false }) {
  return (
    <section className="content">
      <Link to={`/teams/${id}`}>
        <div>
          <h1>{name}</h1>
        </div>
        {showDetails && (
          <div>
            <h3>{city}</h3>
            <h3>{state}</h3>
          </div>
        )}
      </Link>
    </section>
  );
}
