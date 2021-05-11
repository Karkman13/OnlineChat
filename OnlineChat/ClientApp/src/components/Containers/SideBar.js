import React, {Component} from 'react';
import {HubConnectionBuilder} from '@microsoft/signalr';
 
class SideBar extends Component{
  constructor(props){
    super(props)
    // this.state={
    //   hubConnection = props.hubConnection,
    //   userName = props.userName
    // };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log("click");
    const roomname = window.prompt("Name of room", "");
    try{
      console.log(this.props.username);
      console.log(this.props.hubConnection);
      if(this.props.hubConnection!=null)
      {

          this.props.hubConnection.invoke("CreateRoom", this.props.username, roomname, false);
       
        console.log('done');
      }
    }
    catch(ex){
      console.log("err");
    }
  }

    render(){
        return(
            <div className="side_bar">
          <div className="header">
            <h5>Chat Rooms</h5>
            <button className="create_chat" onClick={this.handleClick}>
            createroom
            </button>
          </div>
          <ul className="rooms_list">

          </ul>
          <div className="profile">
            {/* user name */}
            <div>

            </div>
            {/* leave account */}
            <form>

            </form>
          </div>
        </div>
        );
    }
}

export default SideBar;