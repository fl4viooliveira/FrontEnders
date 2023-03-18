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
    <div className="container">
      {dev.map((data) => (
        <div key={data.id}>
          <h2>{data.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
          <img
            src={data.yoast_head_json.og_image[0].url}
            alt={data.title.rendered}
          />

          <section className="container-fluid skill-box" id="skills">
            <h1 className="text-center my-5">Skills</h1>
            <div className="jumbotron skills-jumbo jumbotron-fluid">
              {data.skills_git_github === "0" ? (
                <></>
              ) : (
                <>
                  <h3 className="mx-3">Git / GitHub</h3>
                  <div className="progress m-3">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: `${data.skills_git_github}%` }}
                    ></div>
                  </div>
                </>
              )}
              {data.skills_html_css === "0" ? (
                <></>
              ) : (
                <>
                  <h3 className="mx-3">HTML / CSS</h3>
                  <div className="progress m-3">
                    <div
                      className="progress-bar progress-bar-striped bg-success progress-bar-animated"
                      role="progressbar"
                      style={{ width: `${data.skills_html_css}%` }}
                    ></div>
                  </div>
                </>
              )}
              {data.skills_javascript === "0" ? (
                <></>
              ) : (
                <>
                  <h3 className="mx-3">JavaScript</h3>
                  <div className="progress m-3">
                    <div
                      className="progress-bar progress-bar-striped bg-info progress-bar-animated"
                      role="progressbar"
                      style={{ width: `${data.skills_javascript}%` }}
                    ></div>
                  </div>
                </>
              )}
              {data.skills_apis === "0" ? (
                <></>
              ) : (
                <>
                  <h3 className="mx-3">Consume APIs</h3>
                  <div className="progress m-3">
                    <div
                      className="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                      role="progressbar"
                      style={{ width: `${data.skills_apis}%` }}
                    ></div>
                  </div>
                </>
              )}
              {data.skills_react === "0" ? (
                <></>
              ) : (
                <>
                  <h3 className="mx-3">React</h3>
                  <div className="progress m-3">
                    <div
                      className="progress-bar progress-bar-striped bg-danger progress-bar-animated"
                      role="progressbar"
                      style={{ width: `${data.skills_react}%` }}
                    ></div>
                  </div>
                </>
              )}

            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
