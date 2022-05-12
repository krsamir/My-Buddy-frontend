import React, { useEffect } from "react";
import Axios from "axios";

function GitHubValidation(props) {
  useEffect(() => {
    const search = props.location.search;
    const code = new URLSearchParams(search).get("code");
    const params = new URLSearchParams();
    params.append("code", code);
    Axios.get(
      "/auth/github/accesstoken",
      { params },
      { withCredentials: true }
    ).then((res) => {
      if (res.data.status === 1) props.history.push("/");
      else props.history.push("/login");
    });
  });

  return <div>Please wait while we log you in!!</div>;
}

export default GitHubValidation;
