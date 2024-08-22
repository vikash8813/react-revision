import React, {useState} from 'react';
import Children from "./children.tsx";

const Parent = ({children,name}) => {
    const loop:number[] = [1,2,3]

    const [count, test] = useState(1)
    const updateCount = () =>{
        console.log('function chla')
        test(count + 1)
    }
    return (
        <div>
            <div>
                {children}
                {name}
                <br/>
                this is parent

                <h2>loop</h2>
                {loop.map(i => {
                    return (
                        <span key={i}>
                            <span key={i}>
                                {i + 1}
                            </span>
                            <br/>
                        </span>
                    )
                })}
                <h2>
                    child component and prop
                </h2>
                <Children name={'vikash jangir is a prop example'} updateNumber={updateCount}/>
                <br/>

                <div>
                    count: {count}
                </div>
                <button onClick={updateCount}>
                    increase count
                </button>



            </div>
        </div>
    );
};

export default Parent;