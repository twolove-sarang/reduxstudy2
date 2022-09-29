import { useState } from "react";
import "./App.css";
import { type } from "@testing-library/user-event/dist/type";
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";
import Example from "./component/Example";
import Onemore from "./component/Onemore";

function App() {
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  // const count2 = useSelector((state) => state.count2);

  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "sarang", password: "12321" } });
  };

  const decrease = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div>
      <div>{count}</div>
      <div>
        {id}
        {password}
      </div>
      <button onClick={increase}>+5</button>
      <button onClick={login}>Login</button>
      <button onClick={decrease}>-</button>
      <Box />
      <Example />
      <Onemore />
    </div>
  );
}

export default App;
