import React from 'react'
import { useContext } from 'react'
import UserContext from '../contexts/UserContextBase'

const ServerMessage = () => {

const { setServerMessage, serverMessage } = useContext(UserContext)

  return (
    <div>
        {serverMessage && (
            <div className="server-message">
            <p>{serverMessage}</p>
            <button className="close-message" onClick={() => {setServerMessage("")}}>close message</button>
            </div>
        )}
    </div>
  )
}

export default ServerMessage