import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Teams from '../../Components/TeamFunction/Teams';
import { getTeamsById } from '../../services/teamsRoutes';

export default function TeamDetail() {
  const { id } = useParams();
  console.log(id);
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTeamsById(id).then(({ data }) => setTeam(data));
    setLoading(false);
    console.log(team);
  }, []);
  if (loading) return <h1>loading</h1>;
  return (
    <div>
      <Teams teams={team} />
    </div>
  );
}
