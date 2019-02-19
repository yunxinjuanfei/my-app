import React, { Component } from 'react'

import TopNav from '../nav-top/index'
import SideNav from '../nav-side/index';

import './theme.css';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div id="wrapper">
                <TopNav />
                <SideNav />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;