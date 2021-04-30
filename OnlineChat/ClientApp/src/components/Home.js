import React, { Component } from 'react';
import SideBar from './Containers/SideBar';
import {HubConnectionBuilder} from '@microsoft/signalr';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    var connection = new HubConnectionBuilder().withUrl("/chatHub").build();
    console.log("connection start");
    console.log(connection.baseUrl);
    return (
      <div className="app">
        <SideBar/>
        <div className="main_content">

        </div>
      </div>
    );
  }
}
