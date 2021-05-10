import React, {Component} from 'react';
 
class SideBar extends Component{
  constructor(props){
    super(props)
  }

    render(){
        return(
            <div className="side_bar">
          <div className="header">
            <h5>Chat Rooms</h5>
            <button className="create_chat">

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