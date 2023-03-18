import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Developer from "./slug.jsx";
import Layout from "../../components/Layout.jsx";

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
    <Layout>
      <ul>
        {team.map((dev) => (
          <li key={dev.id}>
            <Link to={dev.slug} element={<Developer />}>
              {dev.title.rendered}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
