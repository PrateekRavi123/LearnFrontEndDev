import React, { useMemo, useState } from "react";

function UseMemoFn (){
    const [count,setCount] = useState(0);
    const [othercount,setOthercount] = useState(0);
    //Similar to componentDidMount and ComponentDidUpdate, makes it usable in function component
    const calculation = useMemo(()=>{
        console.log('Running Calculation');
        return count*2;
    },[count]);
    return (
        <div>
            <p>Count: {count}</p>
            <p>Calculation : {calculation}</p>
            <p>Other Count : {othercount}</p>
            <button onClick={()=>setCount(count+1)}>Count</button>
            <button onClick={()=>setOthercount(othercount+1)}>othercount</button>
        </div>
    )
}

export default UseMemoFn;