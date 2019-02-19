import React, { Component } from 'react'

import PageTitle from '../../components/page-title/index'
import './index.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="首页"></PageTitle>
                <div className="row">
                    <div className="col-md-12">
                    body
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;