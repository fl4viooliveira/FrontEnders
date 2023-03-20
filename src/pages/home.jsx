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
        <div className="container">
          <div className=" mt-3">
            <div className="my-3 d-flex justify-content-center ">
              <img
                className="img-fluid p-3"
                src={data.yoast_head_json.og_image[0].url}
                alt={data.title.rendered}
              />
            </div>
            <div className="col content" style={{ maxWidth: "600px", margin:"0 auto" }}>
              <div
                className="text-center p-4"
                dangerouslySetInnerHTML={{ __html: data.content.rendered }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </Layout>
  );
}
