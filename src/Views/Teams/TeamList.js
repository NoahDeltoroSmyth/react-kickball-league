import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTeams } from '../../services/teamsRoutes';

export default function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setTeams(data);
    };
    fetchData();
  }, []);

  return (
    <div className="teams-list">
      {teams.map((team) => (
        <Link className="teams" key={team.id} to={`/teams/${team.id}`}>
          {team.name}
        </Link>
      ))}
    </div>
  );
}
