import React, {Component} from 'react';
import Anime from "./data/Anime.json";

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
                        anime: "",
                        characters: "",
                        protagonist: "",
                        episodes: ""
                    };
        this.onChange = this.onChange.bind(this);
        this.click = this.click.bind(this);
    }

    click(event) {
        event.preventDefault();
        // console.log(this.state.anime);
        const {anime} = this.state;
        // console.log(anime); 
        Anime.forEach(data => {
            if(data.anime === anime){
                this.setState({
                    anime: data.anime,
                    characters: data.characters,
                    protagonist: data.protagonist,
                    episodes: data.episodes
                });
                return;
            }
        });
    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        const {anime} = this.state;
        const {characters} = this.state;
        const {protagonist} = this.state;
        const {episodes} = this.state;
        return (
            <div>
                <input type="text" name="anime" onChange={this.onChange} /><br />
                    
                    ANIME: {anime}<br />
                    CHARACTERS: {characters}<br />
                    PROTAGONIST: {protagonist}<br />
                    EPISODES: {episodes}<br />
                
                <button onClick={this.click}>SUBMIT</button>
            </div>
        );
    }
}


export default Info
