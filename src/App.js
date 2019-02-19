import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


import Home from './page/home/index'
import Layout from './components/layout/index'

class App extends Component {
  render() {
    return (
        <Router>
          <Layout>
          <Switch>
              {/* <Link to="/">首页</Link> */}
              <Route exact path="/" component={Home} />
              <Route path = "/product" component = {Home}/> 
              <Route path="/product-category" component={Home} /> 
              {/* <Route path="/order" component={Home} /> 
              <Route path="/user" component={Home} />  */}
          </Switch>
          </Layout>
        </Router>
    );
  }
}

export default App;
