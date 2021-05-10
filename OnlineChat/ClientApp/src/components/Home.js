import React, { Component, useState, useEffect } from 'react';
import SideBar from './Containers/SideBar';
import {HubConnectionBuilder} from '@microsoft/signalr';



export class Home extends Component {
  constructor(props){
    super(props);

    this.state={
      username:"",
      message: "",
      messages: [],
      hubConnection: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  static displayName = Home.name;
  
  componentDidMount = () =>{
    console.log(this.state.username);
    const username =  window.prompt("Your name:", "Grigory Malkov")
    const hubConnection = new HubConnectionBuilder().withUrl("/chatHub").build();

    this.setState({hubConnection, username}, ()=>{
      this.state.hubConnection.start().then(()=>console.log("connection staetsd")).catch(err=> console.log("error"));
      this.state.username = username;
      // this.state.hubConnection.on("GetConsoleM");
      // this.state.hubConnection.invoke("GetConsoleM");
      // this.state.hubConnection.on("SendToRoom", "someroom", "message");
    })
    console.log(this.state.username);
  };
  sendMessage = () =>{
    
    try{
      if(this.state.hubConnection!=null)
      {
        this.state.hubConnection.start().then(()=>{
          this.state.hubConnection.invoke("GetConsoleM", this.state.username);
        })
        console.log('done');
      }
    }
    catch(ex){
      console.log("err");
    }
    
  }

  handleClick(){
    console.log("click");
    const roomname = window.prompt("Name of room", "");
    try{
      if(this.state.hubConnection!=null)
      {

          this.state.hubConnection.invoke("CreateRoom", this.state.username, "myfirstroom", false);
       
        console.log('done');
      }
    }
    catch(ex){
      console.log("err");
    }
  }

  render () {
    this.sendMessage();
    // const [connection, setConnection] = useState(null);

    // useEffect(()=>{
    //   const newConnection = new HubConnectionBuilder()
    //   .withUrl("https://localhost:44359/chatHub")
    //   .withAutomaticReconnect()
    //   .build();

    //   setConnection(newConnection);
    // }, []);

    // useEffect(()=>{
    //   if (connection){
    //     connection.start().
    //     then(result=>{console.log("connected");})

    //     connection.on("GetConsoleM")
    //   }
    // }, [connection]);
    
    // connection.start();
    // connection.on("GetConsoleM");
    // connection.invoke("GetConsoleM");
    return (
      <div className="app">
        <button className="createroom" onClick={this.handleClick} >createroom</button>
        <form method="post">

        </form>
        <SideBar />
        <div className="main_content">

        </div>
      </div>
    );
  }
}
