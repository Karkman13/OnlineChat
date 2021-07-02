import React, { Component, useState, useEffect } from 'react';
import SideBar from './Containers/SideBar';
import {HubConnection, HubConnectionBuilder} from '@microsoft/signalr';

interface Iprops{
}

interface IRomm{
  
}

interface IState{
  username?:string,
      message: string|null,
      messages: [],
      rooms: [{
        id: string,
        name: string,
        isGroup: boolean,
        gBlockMessages: [],
        chats: []
      }],
      hubConnection: HubConnection,
}

class Home extends Component <Iprops, IState>{
  constructor(props: Iprops){
    super(props);
    this.state={
      username:"",
      message: "",
      messages: [],
      rooms: [{
        id: "",
        name: "",
        isGroup: false,
        gBlockMessages: [],
        chats: []
      }],
      hubConnection: new HubConnectionBuilder().withUrl("https://localhost:44359/chatHub").build()
    };
  }
  static displayName = Home.name;
  
  componentDidMount = () =>{
    console.log(this.state.username);
    const username =  window.prompt("Your name:", "Grigory Malkov")!;
    // const hubConnection = new HubConnectionBuilder().withUrl("https://localhost:44359/chatHub").build();
    this.setState({username:username}, ()=>{
      console.log(this.state.username);
      this.state.hubConnection.start().then(()=> {console.log('started');
      this.state.hubConnection.invoke("HelloWorld").then(response => {
        console.log(response);
      })});
      // this.state.hubConnection.start().then(()=>console.log("connection staetsd")).catch(err=> console.log("error"));
      // this.state.hubConnection.on("GetConsoleM");
      // this.state.hubConnection.invoke("GetConsoleM");
      // this.state.hubConnection.on("SendToRoom", "someroom", "message");
    })
    
  };

  HW = () =>{
    console.log(this.state.hubConnection.connectionId);
    this.state.hubConnection.invoke("HelloWorld").then(response => {
      console.log(response);
    })
  }

  // GetRooms = () =>
  // {
  //   try{
  //     if(this.state.hubConnection!=null)
  //     {
  //       // console.log("conected");
  //       // this.state.hubConnection.start().then(()=>{
  //       //   console.log("connected2");
  //       //   this.state.hubConnection.invoke("GetRooms", this.state.username).then(response=>{
  //       //     this.setState({rooms:response});
  //       //     console.log(this.state.rooms);
  //       //     console.log(response);
  //       //   }).catch(ex =>{console.log(ex)});
  //       // })
  //      this.state.hubConnection.invoke("GetRooms", this.state.username).then(response=>{
  //        this.setState({rooms:response}, ()=>{
  //          console.log(this.state.rooms);
  //          console.log(response);
  //        })
  //      }).catch(ex =>{console.log(ex)});

  //     }
  //   }
  //   catch(ex)
  //   {
  //     console.log(ex);
  //   }
  //   console.log("some rooms");
  //   console.log(this.state.rooms);
  // }

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



  // sendMessage = () =>{
    
  //   try{
  //     if(this.state.hubConnection!=null)
  //     {
  //       this.state.hubConnection.start().then(()=>{
  //         this.state.hubConnection.invoke("GetConsoleM", this.state.username);
  //       })
  //       console.log('done');
  //     }
  //   }
  //   catch(ex){
  //     console.log("err");
  //   }
    
  // }

  render () {
    // this.sendMessage();
    // this.GetRooms();
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
        <button onClick={this.HW}>
          Click
        </button>
        <form method="post">

        </form>
        <SideBar {...this.state}/>
        <div className="main_content">

        </div>
      </div>
    );
  }
}

export default Home;