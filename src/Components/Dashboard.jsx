import React from "react";
import Cookies from "./Authentication/SessionManager";
const cookies = new Cookies();
function Dashboard(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{
          border: "1px solid #000",
          padding: "10px 20px",
          margin: "20px",
          borderRadius: "5px",
          backgroundColor: "yellowgreen",
          color: "#fff",
          cursor: "pointer",
        }}
        onClick={() => {
          cookies.deleteCookiesByName("access_token");
          window.location.reload();
        }}
      >
        Logout
      </div>
    </div>
  );
}

export default Dashboard;
