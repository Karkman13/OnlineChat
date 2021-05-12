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
      rooms: [{
        id: null,
        name: null,
        isGroup: null,
        gBlockMessages: [],
        chats: []
      }],
      hubConnection: null,
    };
  }
  static displayName = Home.name;
  
  componentDidMount = () =>{
    console.log(this.state.username);
    const username =  window.prompt("Your name:", "Grigory Malkov")
    const hubConnection = new HubConnectionBuilder().withUrl("https://localhost:44359/chatHub").build();

    this.setState({hubConnection, username}, ()=>{
      this.state.hubConnection.start().then(()=>console.log("connection staetsd")).catch(err=> console.log("error"));
      this.state.username = username;
      // this.state.hubConnection.on("GetConsoleM");
      // this.state.hubConnection.invoke("GetConsoleM");
      // this.state.hubConnection.on("SendToRoom", "someroom", "message");
    })
    console.log(this.state.username);
  };

  GetRooms = () =>
  {
    try{
      if(this.state.hubConnection!=null)
      {
        console.log("conected");
        this.state.hubConnection.start().then(()=>{
          console.log("connected2");
          this.state.hubConnection.invoke("GetRooms", this.state.username).then(response=>{
            this.setState((response)=> {this.state.rooms = response});
            console.log(this.state.rooms);
            console.log(response);
          }).catch(ex =>{console.log(ex)});
        })
       

      }
    }
    catch(ex)
    {
      console.log(ex);
    }
    console.log("some rooms");
    console.log(this.state.rooms);
  }

  // Getrooms(){
  //   this.setState({rooms}, ()=>{
  //     try{
  //       if(this.state.hubConnection!=null)
  //       {
  //         // this.state.rooms = this.hubConnection.invoke("GetRooms", this.state.username);
  //         this.hubConnection.invoke("GetRooms", this.state.username).then(function(result){
  //           for(var i=0; i<result.lenght; i++){
  //             rooms.Add(result.name)
  //           }
  //         })
  //       }
  //     }
  //     catch(ex){
  //       console.log("err");
  //     }
  //   })
  // }



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

  render () {
    // this.sendMessage();
    this.GetRooms();
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
        <form method="post">

        </form>
        <SideBar {...this.state}/>
        <div className="main_content">

        </div>
      </div>
    );
  }
}
