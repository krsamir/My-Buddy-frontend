import React, { useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
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
      if (res.data.status === 1) {
        setTimeout(() => {
          props.history.push("/");
        }, 500);
      } else {
        setTimeout(() => {
          props.history.push("/login");
        }, 500);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {" "}
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </div>
  );
}

export default GitHubValidation;
