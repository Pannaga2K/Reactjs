import React, {Component} from 'react'

class Num extends Component {
    constructor(props){
        super(props);
        this.state = {
                        expression: "",
                        ans: ""
                    };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit(event){
        event.preventDefault();
        const {expression} = this.state;
        // console.log(expression);
        var ans = eval(expression);
        console.log(ans);
        this.setState({ans: ans});
    }


    render() {
        var {expression} = this.state;
        var {ans} = this.state;
        return(
            <div>
                <input type="text" name="expression" onChange={this.onChange} />
                <button onClick={this.onSubmit}>SUBMIT</button><br/> 
                <h1>{expression} = {ans}</h1>
            </div>
        );
    }
}

export default Num
