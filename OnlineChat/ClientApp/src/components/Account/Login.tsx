import React, {Component, MouseEvent} from 'react'
import axios from 'axios';

class Login extends Component{
    constructor(pros:any){
        super(pros)
        this.state = {

        }
        this.OnClickB = this.OnClickB.bind(this);
        this.OnClickBB=this.OnClickBB.bind(this);
    }

    OnClickB(event:React.MouseEvent){
        axios.get("https://localhost:44359/login/hello").then(resposnse=>{
            console.log(resposnse);
        })
        console.log("smt");
    }

    OnClickBB(event:MouseEvent){
        axios.get("https://localhost:44359/login/signin?username=Karkman13").then(resposnse=>{
            console.log(resposnse);
        })
    }

    render(){
        return(
            <div>
                <div>
                    login
                </div>
                <button onClick={this.OnClickB}>
                </button>
                <button onClick={this.OnClickBB}>
                    B2
                </button>
            </div>
        )
    }
}

export default Login;