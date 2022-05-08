// import React from "react";

// function Home() {
//   return <div><button>Hi</button></div>;
// }

// export default Home;
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import GitHubIcon from '@mui/icons-material/GitHub';
import JiraIcon from './icon.png';

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Sign in
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Sign In</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Continue with..&nbsp;&nbsp;&nbsp;
            <GitHubIcon fontSize="large" />
            &nbsp;&nbsp;
            <img src={JiraIcon} width={30} height={30} alt="BigCo Inc. logo"/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}