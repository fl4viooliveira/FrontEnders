import Layout from "../../components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ServiceList() {
  const [services, setServices] = useState([]);
  const apiUrl = "https://api.fl4v.io/wp-json/wp/v2/service";

  useEffect(()=> {
    axios.get(apiUrl)
    .then((response)=>{
        setServices(response.data)
      })
  },[setServices])

  console.log(services)

  return (
    <Layout>
      <div>
        <ul>
          {services.map((serv)=>(
          <li>{serv.title.rendered}</li>
          ))}
        </ul>
        <h1>Services</h1>
      </div>
    </Layout>
  );
}
