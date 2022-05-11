import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import GitHubIcon from "@mui/icons-material/GitHub";
import OAuthBitbucket from "./OAuthBitbucket";
import "./style.css";
export default function Login(props) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <Button variant="outlined" onClick={handleClickOpen}>
          Sign in
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        {/* <DialogTitle>Sign In</DialogTitle> */}
        <DialogContent>
          <DialogContentText component="div">
            <div
              className="btn-oauth github"
              onClick={() =>
                (window.location =
                  "https://github.com/login/oauth/authorize?client_id=7a2611f59f28f55b2e99")
              }
            >
              <GitHubIcon fontSize="large" color="action" />
              <span className="git-text">Login with Github</span>
            </div>
            <OAuthBitbucket />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
