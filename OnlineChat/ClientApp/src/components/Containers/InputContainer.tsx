import { inheritInnerComments } from "@babel/types";
import React, {Component} from "react";

interface IProps{
    inputtype:string,
    inputtext:string,
    i: number,
    _handleChangeValue: (value:string, i:number) => void
}

interface IState{
    text: string
}

class InputComponent extends Component<IProps, IState>{
    constructor(props:IProps){
        super(props)
        this.state={
            text: ''
        }
        this._handleChangeText=this._handleChangeText.bind(this);
    }

    _handleChangeText(event:any){
        this.setState({
            text: event.target.value
        }, ()=> this.props._handleChangeValue(this.state.text, this.props.i));
    }

    render(){
        return(
            <div>
                <div>
                    {this.props.inputtext}
                </div>
                <input type={this.props.inputtype} onChange={this._handleChangeText}/>
            </div>
        )
    }
}

export default InputComponent;