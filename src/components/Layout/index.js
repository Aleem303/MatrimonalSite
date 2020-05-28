import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';

const Layout = (props) => {
  return(
      <React.Fragment>
          <div className="container1">
            {props.children}
            <Sidebar />
          </div>
      </React.Fragment>   
   )
}
export default Layout