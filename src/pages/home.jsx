import React, { useEffect, useState } from "react";
import "../styles/homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import axios from "axios";

export default function Home() {
  const homeUrl = "https://api.fl4v.io/wp-json/wp/v2/pages?slug=home";

  const [home, setHome] = useState([]);

  useEffect(() => {
    axios.get(homeUrl).then((response) => {
      setHome(response.data);
    });
  }, [homeUrl, setHome]);

  console.log(home);
  return (
    <Layout>
      {home.map((data) => (
        <section
          key={data.id}
          className="d-flex align-items-center my-5"
          style={{ height: "80vh" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              dangerouslySetInnerHTML={{ __html: data.content.rendered}}
              >
              </div>
              <div className="col-lg-6 order-1 order-lg-2 hero-img">
                <img
                  src={data.yoast_head_json.og_image[0].url}
                  className="img-fluid animated"
                  alt="hero-img"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
}
