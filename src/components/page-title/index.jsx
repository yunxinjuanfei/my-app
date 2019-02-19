import React, { Component } from 'react'

class PageTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentWillMount(){
        document.title = this.props.title + ' - Happy Mall';
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h1 class="page-header">{this.props.title}</h1>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default PageTitle;