import Layout from "../../components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "./slug";
import Container from "react-bootstrap/Container";

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
      <Container fluid="lg">
        <h2 className="my-4 text-center">Offered Services</h2>
        <ul className="row">
          {services.map((serv) => (
            <li className="col-lg-4" key={serv.id}>
              <Link to={serv.slug} element={<Service />}>
                <div
                  className="card my-3 p-2 mx-auto border"
                  style={{ width: "18rem", height: "18rem", backgroundColor: "transparent" }}
                >
                  <img
                    className="card-img-top"
                    src={serv.image.guid}
                    alt={serv.title.rendered}
                    style={{
                      width: "13rem",
                      height: "13rem",
                      margin: "0 auto",
                      objectFit: "contain",
                      filter: "invert(100%)",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{serv.title.rendered}</h5>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  );
}
