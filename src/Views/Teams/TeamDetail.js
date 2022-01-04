import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Teams from '../../Components/TeamFunction/Teams';
import { getTeamsById } from '../../services/teamsRoutes';

export default function TeamDetail() {
  const { id } = useParams();
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    getTeamsById(id).then(({ data }) => setTeams(data));
  }, [id]);
  if (!teams) return <h1>loading</h1>;

  return <Teams team={teams} />;
}
