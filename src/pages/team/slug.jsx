import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Developer() {
  let { slug } = useParams();
  const apiUrl = `https://api.fl4v.io/wp-json/wp/v2/posts?slug=${slug}`;

  const [dev, setDev] = useState([]);

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setDev(response.data);
    });
  }, [apiUrl, slug]);

  console.log(dev, slug);

  return (
    <div>
      {dev.map((data) => (
        <div key={data.id}>
          <h2>{data.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{__html: data.content.rendered}} />
        </div>
      ))}
    </div>
  );
}
