import { Console } from 'console';
import React, {Component} from 'react';
import InputContainer from '../Containers/InputContainer';
import {Link} from 'react-router-dom';
import './Register.scss';
import axios from 'axios';

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
        this._handleChange=this._handleChange.bind(this);
    }

    _handleClickRegisterButton(){
        console.log("some text")
        console.log(this.state.username);
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.state.confirmpassword);
        axios.get(`https://localhost:44359/register/sendm?username=${this.state.username}&email=${this.state.email}&passwod=${this.state.password}`).then(res=>{console.log(res.data)});
        axios.get("https://localhost:44359/register/sendmm").then(resposnse=>{
            console.log(resposnse.data);
        })
    }

    _handleChangeValue(value:string, i:number){
        switch(i){
            case 1: this.setState({username:value}); break;
            case 2: this.setState({email:value}); break;
            case 3: this.setState({password:value}); break;
            case 4: this.setState({confirmpassword:value}); break;
        }
    }

    _handleChange(event:any){
        const key = event.target.name;
        if (Object.keys(this.state).includes(key)){
            this.setState({[key]:event.target.value} as Pick<Istate, keyof Istate>)
        }
        else console.log('err')
    }


    render(){
        return(
            <div className='register_body'>
                <form method='post' action='https://localhost:44359/register/sendm?'>
                    <label>
                        Username
                    </label>
                    <input type='text' name='username' onChange={this._handleChange} />
                    <label>
                        Email
                    </label>
                    <input type='text' name='email' onChange={this._handleChange}/>
                    <label>
                        Password
                    </label>
                    <input type='password' name='password' onChange={this._handleChange} />
                    <label>
                        Confirm Password
                    </label>
                    <input type='password' name='confirmpassword' onChange={this._handleChange} />
                    <input type='submit'/>

                </form>
                <InputContainer inputtext={"Username"} inputtype={"text"} _handleChangeValue={this._handleChangeValue} i={1}/>
                <InputContainer inputtext={"Email"} inputtype={"text"} _handleChangeValue={this._handleChangeValue} i={2}/>
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