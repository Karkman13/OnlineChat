import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import './Register.scss';
import axios from 'axios';
import Home from '../Home';

interface Iprops{

}

interface Istate{
    username: string,
    usernameblure: boolean,
    usernameerror: string,
    email:string,
    emailblure: boolean,
    emailerror: string,
    password:string
    passwordblure: boolean,
    passworderror: string,
    confirmpassword:string,
    confirmpasswordblure: boolean,
    confirmpassworderror: string,
    ifredirect: boolean,
}

class Register extends Component<Iprops, Istate>{
    constructor(props:Iprops){
        super(props)
        this.state={
            username:'',
            usernameblure: false,
            usernameerror: '',
            email:'',
            emailblure: false,
            emailerror: '',
            password:'',
            passwordblure: false,
            passworderror: '',
            confirmpassword:'',
            confirmpasswordblure: false,
            confirmpassworderror: '',
            ifredirect: false
        }
        this._handleChange=this._handleChange.bind(this);
        this._handleSubmitRegister=this._handleSubmitRegister.bind(this);
        this._handlerBlure=this._handlerBlure.bind(this);
    }

    _handleSubmitRegister(event:any){
        event.preventDefault();
        const textvalidation = this._textValidation();
        if(textvalidation){
            const emailvalidation = this._emailValidate();
            if(emailvalidation){
                console.log(this.state.username);
                console.log(this.state.email);
                console.log(this.state.password);
                console.log(this.state.confirmpassword);
                // axios.get(`https://localhost:44359/register/sendm?username=${this.state.username}&email=${this.state.email}&passwod=${this.state.password}`).then(res=>{console.log(res)});
                // axios.get("https://localhost:44359/register/sendmm").then(resposnse=>{
                //     console.log(resposnse.data);
                // })
                const formdata = {
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password
                }
                axios.post("https://localhost:44359/register/sendm", formdata).then(res=> {
                    if(res.status == 200){
                        console.log('succes')
                        this.setState({ifredirect: true});
                    }
                    else{
                        console.log('err')
                    }
                }).catch(err => {
                    console.log("status error");
                    console.log(err.response.data);
                    const errorresponse:[{fieldname: string, errordescription:string}] = err.response.data;
                    errorresponse.forEach(el =>{
                        let key = el.fieldname + "error";
                        if (Object.keys(this.state).includes(key)){
                            this.setState({[key]: el.errordescription} as unknown as Pick<Istate, keyof Istate>)
                        }
                    })
                })
            }
        }
    }

    _textValidation(){
        let istextvalide = true;
        if(this.state.username === ''){
            this.setState({usernameerror: 'Please enter your username'});
            istextvalide = false;
        }
        else{
            this.setState({usernameerror: ''});
        }
        if(this.state.email === ''){
            this.setState({emailerror: 'Please enter your email address'});
            istextvalide = false;
        }
        else{
            this.setState({emailerror: ''});
        }
        if(this.state.password === ''){
            this.setState({passworderror: 'Please enter your password'});
            istextvalide = false;
        }
        else{
            this.setState({passworderror: ''});
        }
        if(this.state.confirmpassword === ''){
            this.setState({confirmpassworderror: 'Please confirm your password'});
            istextvalide = false;
        }
        else if(this.state.password !== this.state.confirmpassword){
            this.setState({confirmpassworderror: 'Please confirm your password'});
            istextvalide = false;
        }
        else{
            this.setState({confirmpassworderror: ''})
        }
        return istextvalide;
    }

    _emailValidate(){
        const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        const validateres = regexp.test(this.state.email.toLocaleLowerCase());
        if(!validateres){
            this.setState({emailerror: "Invalid email address"});
        }
        else{
            this.setState({emailerror:''});
        }
        return validateres;
    }

    _handleChange(event:any){
        const key = event.target.name;
        if (Object.keys(this.state).includes(key)){
            this.setState({[key]:event.target.value} as Pick<Istate, keyof Istate>)
        }
        else console.log('err')
        
    }

    _handlerBlure(event:any){
        console.log(event.target.name);
        console.log(this.state.usernameblure);
        let key = event.target.name;
        let keyerr = key;
        keyerr = keyerr + "error";
        console.log(keyerr);
        key = key + "blure";
        if(Object.keys(this.state).includes(key)){
            this.setState({[key]: true, [keyerr]:''} as Pick<Istate, keyof Istate>)
        }
        else console.log('err')
        console.log(this.state.usernameblure);
    }


    render(){
        if(this.state.ifredirect){
            return <Redirect to='/home' />
        }
        return(
            <div className='register_body'>
                <form onSubmit={this._handleSubmitRegister} className='form_register'>
                    {<div style={{color:'red'}}>{this.state.usernameerror}</div>}
                    <label>
                        Username
                    </label>
                    <input type='text' name='username' onChange={this._handleChange} onBlur={this._handlerBlure}/>
                    {<div style={{color:'red'}}>{this.state.emailerror}</div>}
                    <label>
                        Email
                    </label>
                    <input type='text' name='email' onChange={this._handleChange} onBlur={this._handlerBlure}/>
                    {<div style={{color:'red'}}>{this.state.passworderror}</div>}
                    <label>
                        Password
                    </label>
                    <input type='password' name='password' onChange={this._handleChange} onBlur={this._handlerBlure}/>
                    {<div style={{color:'red'}}>{this.state.confirmpassworderror}</div>}
                    <label>
                        Confirm Password
                    </label>
                    <input type='password' name='confirmpassword' onChange={this._handleChange} onBlur={this._handlerBlure}/>
                    <input type='submit' value='Register'/>
                    <Link>
                    <div>
                        Already have an account?
                    </div>
                    </Link>
                </form>
                {/* <Link>
                <div>
                    Already have an account?
                </div>
                </Link> */}
            </div>
        )
    }
}

export default Register;