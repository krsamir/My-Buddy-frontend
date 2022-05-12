import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import GitHubIcon from '@mui/icons-material/GitHub';
import JiraIcon from './icon.png';

export default function Login() {
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
            <a href="https://github.com/login/oauth/authorize?client_id=7a2611f59f28f55b2e99">
              <GitHubIcon fontSize="large" color="action"/>
            </a>
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
