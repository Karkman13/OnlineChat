import { Console } from 'console';
import React, {Component} from 'react';
import InputContainer from '../Containers/InputContainer';
import {Link} from 'react-router-dom';
import './Register.scss';

interface Iprops{

}

interface Istate{
    username: string,
    email:string,
    password:string
    confirmpassword:string
}

class Register extends Component<Iprops, Istate>{
    constructor(props:Iprops){
        super(props)
        this.state={
            username:'',
            email:'',
            password:'',
            confirmpassword:''
        }
        this._handleClickRegisterButton=this._handleClickRegisterButton.bind(this);
        this._handleChangeValue=this._handleChangeValue.bind(this);
    }

    _handleClickRegisterButton(){
        console.log("some text")
        console.log(this.state.username);
        console.log(this.state.email);
        console.log(this.state.password);
    }

    _handleChangeValue(value:string, i:number){
        switch(i){
            case 1: this.setState({username:value}); break;
            case 2: this.setState({email:value}); break;
            case 3: this.setState({password:value}); break;
            case 4: this.setState({confirmpassword:value}); break;
        }
    }


    render(){
        return(
            <div className='register_body'>
                <InputContainer inputtext={"Username"} inputtype={"text"} _handleChangeValue={this._handleChangeValue} i={1}/>
                <InputContainer inputtext={"e-mail"} inputtype={"text"} _handleChangeValue={this._handleChangeValue} i={2}/>
                <InputContainer inputtext={"Password"} inputtype={"password"} _handleChangeValue={this._handleChangeValue} i={3}/>
                <InputContainer inputtext={"Confirm password"} inputtype={"password"} _handleChangeValue={this._handleChangeValue} i={4}/>
                <button onClick={this._handleClickRegisterButton}>
                    Register
                </button>
                <Link>
                <div>
                    Already have an account?
                </div>
                </Link>
            </div>
        )
    }
}

export default Register;