import * as React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import JiraIcon from "./icon.png";
import "./style.css";
export default function Login(props) {
  return (
    <div className="main">
      <div className="buttonCenter">
        <button
          className="btn-oauth github"
          onClick={() => (window.location = process.env.REACT_APP_GITHUB_URL)}
        >
          <GitHubIcon fontSize="large" className="git-svg" />
          <span className="git-text">Login with Github</span>
        </button>
        <button
          className="btn-oauth bitbucket"
          onClick={() =>
            (window.location = process.env.REACT_APP_BITBUCKET_URL)
          }
        >
          <img src={JiraIcon} width={30} height={30} alt="Attlassian" />
          <span style={{ marginLeft: "10px" }}>Login with Bitbucket</span>
        </button>
      </div>
    </div>
  );
}
