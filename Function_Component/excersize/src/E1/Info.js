import React, {useState} from 'react'
import Anime from "./data/Anime.json";

function Info() {
    const [info, setInfo] = useState({
                                anime: "",
                                characters: "",
                                protagonist: "",
                                episodes: ""
                            });
    
    const onChange = (e) => {
        setInfo({[e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(info);
        Anime.forEach(anime => {
            console.log(anime);
            if(info.anime === anime.anime){
                setInfo({
                    anime: anime.anime,
                    characters: anime.characters,
                    protagonist: anime.protagonist,
                    episodes: anime.episodes
                });
            }
        });
        console.log(info);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="anime" onChange={onChange} />
            </form>
            <h1>{info.anime}</h1><br/>
            <h1>{info.characters}</h1><br/>
            <h1>{info.protagonist}</h1><br/>
            <h1>{info.episodes}</h1>
        </div>
    )
}

export default Info
