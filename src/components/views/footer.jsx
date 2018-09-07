import React  from 'react';
import {Link} from 'react-router'
import StickyFooter from 'react-sticky-footer';

class RT_Footer extends React.Component{

  render(){
    return (
      <div>
        <StickyFooter
            bottomThreshold={50}
            normalStyles={{
            backgroundColor: "#999999",
            padding: "2rem"
            }}
            stickyStyles={{
            backgroundColor: "rgba(255,255,255,.8)",
            padding: "2rem"
            }}>
           <ul>
            <li><Link to="/About Us" className="grey-text text-lighten-3">About Us</Link></li>
            <li><Link to="/Terms & Conditions" className="grey-text text-lighten-3">Terms & Conditions</Link></li>
            <li><Link to="/Help" className="grey-text text-lighten-3">Help</Link></li>
            <li><Link to="/Contact Us" className="grey-text text-lighten-3">Contact Us</Link></li>
          </ul>
          <h5 className="white-text">Footer Content</h5>
        </StickyFooter>

      </div>
      );
  }
}
export default RT_Footer;