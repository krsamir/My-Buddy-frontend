import React, { useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { successToast, errorToast } from "../../Redux/Actions/ToastActions";
import { connect } from "react-redux";
import axios from "axios";
import "./style.css";

function OAuthBitbucket(props) {
  useEffect(() => {
    const search = props.location.search;
    const code = new URLSearchParams(search).get("code");
    props.successToast("Please Wait while we Validate you.✋✋", 3000);
    if (code === undefined || code === null) {
      props.errorToast("Unauthorized Access🙄.");
      props.history.push("/login");
    } else {
      axios
        .post("/auth/bitbucket/accestoken", { code }, { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          if (res.data.status === 1) {
            props.successToast("Authorized ✔✔.");
            setTimeout(() => {
              props.history.push("/");
            }, 500);
          } else {
            props.errorToast("Caught into some issue while validating🙄.");
            setTimeout(() => {
              props.history.push("/login");
            }, 500);
          }
        })
        .catch((e) => {
          console.log(e);
          props.errorToast("Caught into some issue while validating🙄.");
          setTimeout(() => {
            props.history.push("/login");
          }, 500);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default connect(null, { successToast, errorToast })(OAuthBitbucket);
