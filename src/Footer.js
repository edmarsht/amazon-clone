import React from 'react'
import "./Footer.css"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'black'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function Footer() {
    const classes = useStyles();

    return (
        <div className="footer">
        <AppBar className="footer" position="static" color="default" className="footer">
        <Toolbar>
          <Typography className="che">
            Made with love by Edouard Toulet 🚀
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
    )
}

export default Footer
