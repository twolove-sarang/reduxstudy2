import React from "react";
import { useSelector } from "react-redux";

const Box = () => {
  const count = useSelector((state) => state.count);
  // const count2 = useSelector((state) => state.count2);
  return <div>Box{count}</div>;

};

export default Box;
