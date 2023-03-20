import { useEffect } from "react";

export default function Admin() {
  useEffect(() => {
    window.location.assign("https://api.fl4v.io/wp-admin");
  });
  return <></>;
}
