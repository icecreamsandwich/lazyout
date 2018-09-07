import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './home';
import Contact from './contact';
import About from './about';
import NavBar from './navbar';
import MySideNav from './sidenav';

var LandingHome = React.createClass({
    getInitialState: function() {
        return {
            title: "",
            content: ""
        };
    },

    render: function() {
        return (
            <div>
                <NavBar />
                <MySideNav />
            </div>
        );
    }
});

module.exports = LandingHome;

         {/*  <div className="row">
                    <div className="col m6">
                        <Contact/>
                    </div>
                    <div className="col m6">
                        <About />
                    </div>                   
                </div>*/}