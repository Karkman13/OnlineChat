import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import { Counter } from './components/Counter';
import Login from './components/Account/Login'
import Register from './components/Account/Register';

import './custom.css'

 class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register}/>
        <Route path='/home' component={Home} />
        <Route path='/counter' component={Counter} />
      </Layout>
    );
  }
}

export default App;
