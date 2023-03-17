import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Aboutus() {
    const apiUrl = `https://api.fl4v.io/wp-json/wp/v2/pages/11`;

    const [about, setAbout] = useState([]);

    useEffect(() => {
        axios.get(apiUrl).then((response) => {
            setAbout(response.data.content.rendered);
            console.log(response.data.content.rendered)
        })
    });

}
