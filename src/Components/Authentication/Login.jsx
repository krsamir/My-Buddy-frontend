import * as React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OAuthBitbucket from "./OAuthBitbucket";
import "./style.css";
export default function Login(props) {
  return (
    <div className="main">
      <div className="buttonCenter">
        <button
          className="btn-oauth github"
          onClick={() =>
            (window.location =
              "https://github.com/login/oauth/authorize?client_id=7a2611f59f28f55b2e99")
          }
        >
          <GitHubIcon fontSize="large" className="git-svg" />
          <span className="git-text">Login with Github</span>
        </button>
        <OAuthBitbucket />
      </div>
    </div>
  );
}
