import React from "react";
import { useContext } from "react";
import UserContext from "../contexts/UserContextBase";
import "../styles/ServerMessage.css";
import Button from "./Button"

const ServerMessage = () => {
  const { setServerMessage, serverMessage } = useContext(UserContext);

  return (
    <div class="server-message-container">
      {serverMessage && (
        <div
          className={
            serverMessage.type === "failed"
              ? "server-message warning"
              : "server-message info"
          }
        >
          <div className="server-message-container">
          <p>
            {serverMessage.type} : {serverMessage.text}
          </p>
          <Button
            className="close-message"
            onClick={() => {
              setServerMessage("");
            }}
            text="X"
          />
            
          

          </div>
        </div>
      )}
    </div>
  );
};

export default ServerMessage;
