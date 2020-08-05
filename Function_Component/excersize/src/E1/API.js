import React, {useState} from 'react'
import axios from "axios";

var p = [];

function API() {
    // axios.create({
    //     baseUrl: "https://pokeapi.co/api/v2/pokemon/charizard"
    // });
    var x, i=0;
    v(++i);
    async function v(i) {
        axios.get("https://pokeapi.co/api/v2/pokemon/" + i).then(res => {
            // p = res.data;
            p.push(res.data.forms[0].name);
            // console.log(res.data.forms[0].name);
            // console.log(p);
        }).catch(function(error){
            console.warn(error);                  
        });
        // console.log(x);
        if(i>10)
            return ;
        else
            return v(++i);
    }
    console.log(p);
    return (
        <div>
        </div>
    )
}

export default API