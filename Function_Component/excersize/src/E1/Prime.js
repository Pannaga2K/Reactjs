import React,  {useReducer} from 'react'

function Prime() {
    const [num, dispatch] = useReducer((state, newState) => (
        ({...state, ...newState})), {number: 0, isPrime: false});
    
    const onChange = (e) => {
        dispatch({
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(num);
        var count=0, x = eval(num.number);
        // var {isPrime} = this.state;
        // console.log(x);
        var p = Math.floor(x/2);
        for(var i=2; i<=p; i++)
            if(x%i === 0)
                count++;
        if(!count)
            dispatch({isPrime: true});
        else
            dispatch({isPrime: false});
    }
    var v;
    if(num.isPrime)
        v = <h1>PRIME NUMBER</h1>
    else
        v = <h1>NOT A PRIME NUMBER</h1>
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="number" onChange={onChange} />
            </form>
            {v}
        </div>
    )
}

export default Prime
