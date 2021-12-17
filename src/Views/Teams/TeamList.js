import React, { useEffect, useState } from 'react';
// import Teams from '../../Components/TeamFunction/Teams';
import { fetchTeams } from '../../services/teamsRoutes';

export default function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setTeams(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>This is a test from teamlist</h1>
    </div>
  );
}
