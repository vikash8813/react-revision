import React from 'react';
import {Link} from "react-router-dom";
import {decrement,increment} from '../../stores/counterStore.js'
import {useDispatch, useSelector} from "react-redux";

function Route1() {
    const state = useSelector(state1 => state1.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            {state}
            this is route 1
            <Link to={{
                pathname: '/',
            }}>go home</Link>

            <button onClick={()=>{dispatch(increment())}}>
                increment
            </button>
        </div>
    );
}

export default Route1;