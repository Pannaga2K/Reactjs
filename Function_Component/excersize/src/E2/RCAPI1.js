import React from 'react';
import Forms from "./Forms";
import {DataLayer} from "./DataLayer";
import reducer, {initialState} from "./reducer";

function RCAPI1() {
    return (
        <DataLayer initialState={initialState} reducer={reducer} >
            <div>
                <Forms/>
            </div>
        </DataLayer>
    )
}

export default RCAPI1
