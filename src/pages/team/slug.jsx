import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobCard from "../../components/JobCard";
import {
  AiOutlineMail,
  AiOutlineFilePdf,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
import Layout from "../../components/Layout";

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
    <Layout>
      <div className="container my-4">
        {dev.map((data) => (
          <div
            key={data.id}
            className="card mb-3 border p-2"
            style={{ width: "100%", backgroundColor: "transparent" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  className="img-fluid rounded p-3"
                  src={data.yoast_head_json.og_image[0].url}
                  alt={data.title.rendered}
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

            <div className="row d-flex">
              {data.linkedin === "" ? (
                <></>
              ) : (
                <div className="col text-center">
                  <a href={data.linkedin} target="_blank" rel="noreferrer">
                    <AiOutlineLinkedin
                      style={{ width: "50px", height: "50px" }}
                    />
                  </a>
                </div>
              )}

              {data.github === "" ? (
                <></>
              ) : (
                <div className="col text-center">
                  <a href={data.github} target="_blank" rel="noreferrer">
                    <i>
                      <AiOutlineGithub 
                      style={{ width: "50px", height: "50px" }}
                      />
                    </i>
                  </a>
                </div>
              )}
              {data.stackoverflow === "" ? (
                <></>
              ) : (
                <div className="col text-center">
                  <a href={data.stackoverflow} target="_blank" rel="noreferrer">
                    <i>
                      <BsStackOverflow 
                      style={{ width: "50px", height: "50px" }}
                      />
                    </i>
                  </a>
                </div>
              )}
            </div>

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

            <div className="container-fluid">
              <h1 className="mb-4">Last Jobs</h1>
              <div className="row">
                {data.job_name_1 === "" ? (
                  <></>
                ) : (
                  <div class="col-md-4 d-flex justify-content-center mb-5">
                    <JobCard
                      deployed={data.job_deployed_1}
                      repo={data.job_repo_1}
                      name={data.job_name_1}
                      img={data.job_image_1.guid}
                      alt={data.job_name_1}
                    />
                  </div>
                )}
                {data.job_name_2 === "" ? (
                  <></>
                ) : (
                  <div class="col-md-4 d-flex justify-content-center mb-5">
                    <JobCard
                      deployed={data.job_deployed_2}
                      repo={data.job_repo_2}
                      name={data.job_name_2}
                      img={data.job_image_2.guid}
                      alt={data.job_name_2}
                    />
                  </div>
                )}
                {data.job_name_3 === "" ? (
                  <></>
                ) : (
                  <div class="col-md-4 d-flex justify-content-center mb-5">
                    <JobCard
                      deployed={data.job_deployed_3}
                      repo={data.job_repo_3}
                      name={data.job_name_3}
                      img={data.job_image_3.guid}
                      alt={data.job_name_3}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="row">
              {data.email === "" ? (
                <></>
              ) : (
                <a
                  href={`mailto:${data.email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-danger btn-floating m-1"
                  role="button"
                >
                  <i>
                    {data.email}: <AiOutlineMail />
                  </i>
                </a>
              )}
              {!data.cv_pdf ? (
                <></>
              ) : (
                <a
                  href={data.cv_pdf.guid}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-danger btn-floating m-1"
                  role="button"
                >
                  <i>
                    CV: <AiOutlineFilePdf />
                  </i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
