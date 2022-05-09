import React, {useEffect} from "react";
import Axios from "axios";

function Home(props) {

  useEffect(() => {
    const search = props.location.search;
    const code = new URLSearchParams(search).get("code");
    Axios.post('http://localhost:8080/auth/github/accesstoken', { code }).then(res => {
      console.log(res);
    })
  });
  
  return <div>Home</div>;
}

export default Home;