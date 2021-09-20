import React from 'react'
import "./Footer.css"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Footer() {

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
