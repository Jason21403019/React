import React, { useState } from "react";
import "./styles/style.css";

const Info = ({ messages, setMessages }) => {
  return (
    <div className="info">
      {messages.map((message, index) => {
        return <p key={index}>My Friend is: {message}</p>;
      })}
    </div>
  );
};

export default Info;
