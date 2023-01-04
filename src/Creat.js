import React, { useState } from "react";

const Creat = ({ messages, setMessages }) => {
  let [input, setInput] = useState("");
  const submitButtonHandler = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <form>
      <input onChange={inputHandler} value={input} type="text" />
      <button onClick={submitButtonHandler}>Submit</button>
    </form>
  );
};

export default Creat;
