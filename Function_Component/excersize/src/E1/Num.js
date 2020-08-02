import React, {useState, useEffect} from 'react'

function Num() {
    const [num, setExp] = useState({
        exp: "",
        ans: 0
    });

    const onChange = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        const {name, value} = e.target;
        setExp({...num, [name]: value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        try{
            num.ans = eval(num.exp);
        } catch(error) {
            console.warn(error);
        }
        console.log(num.ans);
        setExp({...num});
        // console.log(num);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="exp" onChange={onChange} />
            </form>
            <h1>{num.ans}</h1>
        </div>
    )
}

export default Num
