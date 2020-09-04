import React from "react";

export default function Chat(props) {
  const { messageList } = props;
  return (
    <>
      <div
        style={{
          width: "100%",
          borderColor: "blue",
          borderWidth: 1,
          borderStyle: "solid"
        }}
      >
        {messageList.map((message) => (
          <div>
            <h1>From: {message.id}</h1>
            <p>{message.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}
