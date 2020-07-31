import React, {Component} from 'react'

var arr = [];

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
                        anime: "",
                        episodes: 0
                    };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        var {anime} = this.state;
        var {episodes} = this.state;
        console.log(episodes);
        arr.push({anime, episodes});
        console.log(arr);
        // console.log(this.state);
    }

    onChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        var x = [];
        arr.forEach(ele => {
            x.push(<ul><li>{ele.anime}</li><li>{ele.episodes}</li></ul>);
        });
        return(
            <div>
                <input type="text" name="anime" onChange={this.onChange} />
                <input type="Number" name="episodes" onChange={this.onChange} />
                <button onClick={this.onSubmit}>SUBMIT</button>
                {x}
            </div>
        );
    }
}

export default Todo
