import Layout from "../../components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "./slug";

export default function ServiceList() {
  const [services, setServices] = useState([]);
  const apiUrl = "https://api.fl4v.io/wp-json/wp/v2/service";

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setServices(response.data);
    });
  }, [setServices]);

  console.log(services);

  return (
    <Layout>
      <div className="container-fluid">
        <h2 className="my-4 text-center">Offered Services</h2>
        <ul className="row g-3">
          {services.map((serv) => (
            <li className="col" key={serv.id}>
              <Link to={serv.slug} element={<Service />}>
                <div
                  className="card m-5 p-2 mx-auto"
                  style={{ width: "18rem", backgroundColor: "transparent" }}
                >
                  <img
                    className="card-img-top"
                    src={serv.image.guid}
                    alt={serv.title.rendered}
                    style={{ filter: "invert(100%)" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{serv.title.rendered}</h5>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <h1>Services</h1>
      </div>
    </Layout>
  );
}
