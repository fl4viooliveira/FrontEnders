import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";

export default function Service() {
  let { slug } = useParams();
  const apiUrl = `https://api.fl4v.io/wp-json/wp/v2/service?slug=${slug}`;

  const [service, setService] = useState([]);

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setService(response.data);
    });
  }, [apiUrl, slug]);

  console.log(service);

  return (
    <Layout>
      <div className="container my-4">
        {service.map((data) => (
          <div key={data.id}
            className="card mb-3 border p-2"
            style={{ width: "100%", backgroundColor: "transparent" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  className="img-fluid rounded p-3"
                  src={data.image.guid}
                  alt={data.title.rendered}
                  style={{filter: "invert(100%)"}}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title mb-3">{data.title.rendered}</h5>
                  <p
                    className="card-text"
                    dangerouslySetInnerHTML={{ __html: data.content.rendered }}
                  ></p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
