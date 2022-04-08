import React, {useState} from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
const [counter, setCounter] = useState(0)


function increment() {
    return setCounter(n => n + 1)
}
function decrement() {
    return setCounter(n => n-1)
}
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <p style={{fontSize: 40, margin: 50, textAlign: 'center'}}>404 <br/> Not Found</p>
            <hr/>
            <Link to='/'><p style={{color: 'blue', textAlign: 'center'}}>Return to Pokedex home page</p></Link>
        </div>
    );
};

export default NotFound;