import React from "react";
import "./style.css";
import JiraIcon from "./icon.png";
export default function OAuthBitbucket() {
  const handleLogin = () => {};

  return (
    <div>
      <button onClick={handleLogin} className="btn-oauth bitbucket">
        <img src={JiraIcon} width={30} height={30} alt="Attlassian" />
        <span style={{ marginLeft: "10px" }}>Login with Bitbucket</span>
      </button>
    </div>
  );
}
