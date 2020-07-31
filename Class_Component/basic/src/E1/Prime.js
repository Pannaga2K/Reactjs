import React, {Component} from 'react'
import {Link} from "react-router-dom";

class Prime extends Component {
    constructor(props){
        super(props);
        this.state = {
                        number: "",
                        isPrime: 0
                    };
        this.clicked = this.clicked.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    clicked(event) {
        event.preventDefault();
        const {number} = this.state;
        var count=0, x = eval(number);
        // var {isPrime} = this.state;
        // console.log(x);
        var p = Math.floor(x/2);
        for(var i=2; i<=p; i++)
            if(x%i === 0)
                count++;
        if(!count)
            this.setState({isPrime: 1});
        else
            this.setState({isPrime: 0});
        // console.log(isPrime);
        return;
    }
    
    onChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        var {isPrime} = this.state;
        var v;
        if(isPrime)
            v = <h1>PRIME NUMBER</h1>
        else
            v = <h1>NOT A PRIME NUMBER</h1>
        return(
            <div>
                ENTER A NUMBER : <br/>
                <input type="text" name="number" onChange={this.onChange} />
                <button onClick={this.clicked}>SUBMIT</button><br/>
                {v}
            </div>
        )
    }
}

export default Prime
