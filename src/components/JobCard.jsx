import styles from "../styles/JobCard.module.css";
import { MdWeb } from "react-icons/md";
import { BsCodeSquare, BsFillLockFill } from "react-icons/bs";

export default function JobCard(props) {
  return (
    <div className={`card ${styles.cardCustom}`} style={{ width: "18rem" }}>
      <img
        src={props.img}
        className="card-img-top"
        height="160"
        alt={props.name}
      />
      <div className="card-body">
        <h5 className="card-title text-center text-light">{props.name}</h5>
      </div>
      {props.repo ? (
        <a href={props.repo} target="_blank" rel="noreferrer">
          <i>
            Repo: <BsCodeSquare />
          </i>
        </a>
      ) : (
        <p>
          Repo: <BsFillLockFill />
        </p>
      )}
      <a href={props.deployed} target="_blank" rel="noreferrer">
        <i>
          Page: <MdWeb />
        </i>
      </a>
    </div>
  );
}
