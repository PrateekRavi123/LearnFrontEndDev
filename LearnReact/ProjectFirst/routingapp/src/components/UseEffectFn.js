import React, { useEffect, useState } from "react";

function UseEffectFn (){
    const [count,setCount] = useState(0);
    //Similar to componentDidMount and ComponentDidUpdate, makes it usable in function component
    useEffect(()=>{
        document.title = `CountApt ${count}`;
    });
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
        </div>
    )
}

export default UseEffectFn;