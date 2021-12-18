import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Teams from '../../Components/TeamFunction/Teams';
import { getTeamsById } from '../../services/teamsRoutes';

export default function TeamDetail() {
  const { id } = useParams();
  console.log(id);
  const [teams, setTeams] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const fetchData = async () => {
    getTeamsById(id).then(({ data }) => setTeams(data));
    // const data = await getTeamsById(props.match.params.id);
    // setLoading(false);
    // };
  }, [id]);
  // if (loading) return <h1>loading</h1>;
  return (
    <div>
      {/* {teams.map((team) => (
        <li key={team}>
          <Teams teams={teams} />
        </li>
      ))} */}
      {teams.name}
      {teams.city},{teams.state}
    </div>
  );
}
{
  /* <Teams teams={team} /> */
}
