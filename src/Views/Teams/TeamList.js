import React, { useEffect, useState } from 'react';
import Teams from '../../Components/TeamFunction/Teams';
import { fetchTeams } from '../../services/teamsRoutes';

export default function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setTeams(data);
      console.log(data);
      console.log(teams);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Teams teams={teams} />
    </div>
  );
}
