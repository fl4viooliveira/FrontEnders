import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Developer from "./slug.jsx";
import Layout from "../../components/Layout.jsx";
import Tilt from "react-parallax-tilt";

export default function TeamList() {
  const [team, setTeam] = useState([]);

  const apiUrl = "https://api.fl4v.io/wp-json/wp/v2/";

  useEffect(() => {
    axios.get(`${apiUrl}posts`).then((response) => {
      setTeam(response.data);
    });
  }, [setTeam]);

  console.log(team);

  return (
    <Layout>
        <h2 className="mt-5 text-center">Our Developers</h2>
      <div className="container-fluid d-flex flex-column justify-content-center" style={{height: "80vh"}}>
        <ul className="row g-3">
          {team.map((dev) => (
            <li key={dev.id} className="col">
              <Link to={dev.slug} element={<Developer />}>
                <Tilt
                  tiltMaxAngleX={40}
                  tiltMaxAngleY={40}
                  perspective={800}
                  transitionSpeed={1500}
                  scale={1.1}
                  gyroscope={true}
                >
                  <div
                    className="card  p-2 mx-auto"
                    style={{
                      width: "18rem",
                      height: "18rem",
                      background: "rgba( 255, 255, 255, 0.25 )",
                      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                      backdropFilter: "blur( 4.5px )",
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
                        objectFit: "contain",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">
                        {dev.title.rendered}
                      </h5>
                    </div>
                  </div>
                </Tilt>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
