import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from './page/home/index';
import Layout from './components/layout/index';
import Login from './page/login/index'

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
              <Route exact path="/login" component={Login} />
              <Route path="/login" render={props=>(
                  <Layout>
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path = "/product" component = {Home}/> 
                      <Route path="/product-category" component={Home} /> 
                  </Switch>
                </Layout>
               )}/>
            </Switch>
        </Router>
    );
  }
}

export default App;
