import React from 'react';
import {Link} from 'react-router';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
 
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';

 
//specify the base color/background of the parent container if needed
const MySideNav = () => (
    <div style={{background: '#2c3e50', color: '#FFF', width: 220,float:'left',clear:'both'}}> 
        <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>       
            <Nav id='dashboard'>
                <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
                <NavText> <Link to="/home" activeClassName="active">Dashboard</Link> </NavText>
            </Nav>
            <Nav id='sales'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> <Link to="/about" activeClassName="active">About</Link> </NavText>
            </Nav> 
            <Nav id='nav3'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> <Link to="/contact" activeClassName="active">Conact</Link> </NavText>
            </Nav> 
            <Nav id='nav4'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> <Link to="/lorem" activeClassName="active">Lorem</Link> </NavText>
            </Nav>
        </SideNav>
    </div>
)

export default MySideNav;