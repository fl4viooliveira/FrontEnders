import {useParams} from "react-router-dom";

export default function Developer(){
  let {slug} = useParams()
  return(
  <div>
      <h1>{slug}</h1>
    </div>
  )
}
