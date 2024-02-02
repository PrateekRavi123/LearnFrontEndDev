import React from "react";

export const Button = (props) => {
  var stylebtn = {
    backgroundColor: 'lightblue',
  }
  return (
    <div>
      {/* <button
        onClick={() => {
          props.setcnt(props.cnt + 5);
        }}
      >
        +5 via complete state
      </button> */}
      <button style={stylebtn} onClick= {()=>props.onClickFunction(props.increment)}>+{props.increment} via variable of setcnt</button>
    </div>
  );
};
