import React from "react";
import { useEffect, useState } from "react";
import "./styles.css";
import io from "socket.io-client";
import Chat from "./components/Chat";

const url = window.location.href.replace("-3000", "");
const client = io(url);

export default function App() {
  const [connection, setConnection] = useState(client.connected);

  client.on("connect", () => {
    setConnection(true);
  });

  client.on("disconnect", () => {
    setConnection(false);
  });

  useEffect(() => {
    setTimeout(() => {
      client.close();
    }, 3000);
  }, []);

  return (
    <div className="App">
      <p>State: {connection ? "Connected" : "Disconnected"}</p>
      <Chat messageList={[{ id: 1, content: "something" }]} />
    </div>
  );
}
