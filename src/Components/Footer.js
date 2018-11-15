import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';


const Footer = () =>{

    return(
      <div>
        <AppBar position="static" color="primary">
          <ToolBar className="Footer">
              <p>All right reserved</p>
          </ToolBar>
        </AppBar>
      </div>
    )

}


export default Footer;