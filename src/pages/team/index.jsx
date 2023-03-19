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
      <div className="container-fluid">
        <h2 className="my-4 text-center">Our Developers</h2>
        <ul className="row g-3">
          {team.map((dev) => (
            <li key={dev.id} className="col">
              <Link to={dev.slug} element={<Developer />}>
                <div
                  className="card m-5 p-2 mx-auto"
                  style={{
                    width: "18rem",
                    height: "18rem",
                    backgroundColor: "blue",
                  }}
                >
                  <img
                    className="card-img-top"
                    src={dev.yoast_head_json.og_image[0].url}
                    alt={dev.title.rendered}
                    style={{
                      width: "13rem",
                      height: "13rem",
                      margin: "0 auto",
                      objectFit: "contain"

                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      {dev.title.rendered}
                    </h5>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
