import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Teams from '../../Components/TeamFunction/Teams';
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
    <div>
      <ul>
        {/* {teams.map((team) => (
          <li key={team.id}>
            <Teams teams={team} />
          </li>
        ))} */}
        {teams.map((team) => (
          <Link key={team.id} to={`/teams/${team.id}`}>
            {team.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
