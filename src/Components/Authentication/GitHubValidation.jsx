import React, { useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { successToast, errorToast } from "../../Redux/Actions/ToastActions";
import { connect } from "react-redux";
import Axios from "axios";

function GitHubValidation(props) {
  useEffect(() => {
    const search = props.location.search;
    const code = new URLSearchParams(search).get("code");
    if (code === undefined || code === null) {
      props.errorToast("Unauthorized Access🙄 .");
      setTimeout(() => {
        props.history.push("/login");
      }, 500);
    } else {
      const params = new URLSearchParams();
      params.append("code", code);
      props.successToast("Please Wait while we Validate you.✋✋", 3000);
      Axios.get(
        "/auth/github/accesstoken",
        { params },
        { withCredentials: true }
      )
        .then((res) => {
          if (res.data.status === 1) {
            props.successToast("Everything is fine ✔✔.");
            setTimeout(() => {
              props.history.push("/dashboard");
            }, 500);
          } else {
            props.errorToast("Caught into some issue while validating🙄.");
            setTimeout(() => {
              props.history.push("/");
            }, 500);
          }
        })
        .catch((e) => {
          props.errorToast("Caught into some issue while validating🙄.");
        });
    }
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

export default connect(null, { successToast, errorToast })(GitHubValidation);
