import React from 'react';

var NavBar = React.createClass({

    getInitialState: function() {
        return {
            username: "",
            picture: ""
        };
    },

    componentDidMount: function() {
    },

    render: function() {
        return (
            <div>
                <ul id="dropdown1" className="dropdown-content">
                    <li><a className="black-text" href="/logout">Logout<i className="material-icons right">exit_to_app</i></a></li>
                </ul>
                <nav>
                    <div className="nav-wrapper grey lighten-5">
                        <a href="/manager" className="brand-logo blue-text text-darken-1"><img id="logo" src="../public/assets/images/icon.png"/><span className="hide-on-med-and-down">LazyOut</span></a>
                        <a href="/" data-activates="slide-out" className="button-collapse blue-text text-darken-1"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a className="black-text" href="/contact">Contact<i className="material-icons right">group</i></a></li>
                            <li><a className="black-text" href="/about">About<i className="material-icons right">access_time</i></a></li>
                            <li><a className="black-text" href="/lorem">Lorem</a></li>
                            <li><a className="dropdown-button black-text" href="#" data-activates="dropdown1" data-beloworigin="true" data-hover="true">{this.state.username}<img className="circle circle-small" src={this.state.picture}/></a></li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = NavBar;