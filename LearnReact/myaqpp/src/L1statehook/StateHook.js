import React, { useState } from "react";
import { Button } from "./Button";
import Counter from "./Counter";
import { Listcmp } from "./Listcmp";

const StateHook = () => {
  var styleStateHook = {
    backgroundColor: 'cyan',
  }
  const [cnt, setcnt] = useState(0);

  const onClickFunction = (increment) => {
    setcnt(cnt + increment);
  };
  return (
    <div style={{backgroundColor:'wheat'}}>
      <div style={styleStateHook}>StateHook</div>
      {/* <Button setcnt={setcnt} cnt={cnt} /> */}
      <Button onClickFunction={onClickFunction} increment = {10} />
      <Button onClickFunction={onClickFunction} increment = {23} />
      <Button onClickFunction={onClickFunction} increment = {342} />
      <Counter cnt={cnt} />
      <Listcmp/>
    </div>
  );
};

export default StateHook;
