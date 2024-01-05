import { Component } from "react";
import Loading from './Spinner.gif';

export default class Spinner extends Component{
    render(){
        return (
            <div className="text-center">
                <img src={Loading} alt="Loading" />
            </div>
        )
    }
}