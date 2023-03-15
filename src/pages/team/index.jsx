import axios from "axios";
import { useEffect, useState } from "react";

export default function TeamList() {
  const [team, setTeam] = useState([]);

  const apiUrl = "https://api.fl4v.io/wp-json/wp/v2/";

  useEffect(() => {
    axios.get(`${apiUrl}posts?categories=4`).then((response) => {
      setTeam(response.data);
    });
  }, [setTeam]);

  console.log(team);

  return (
    <ul>
      {team.map((dev) => (
        <li>{dev.title.rendered}</li>
      ))}
    </ul>
  );
}
