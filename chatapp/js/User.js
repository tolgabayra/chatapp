import React from 'react';
import ReactDOM from 'react-dom';
import io from "socket.io-client"
import {useState} from "react"
import "../css/User.css"
import Chat from "./Chat"

//client bağlantı
const socket = io.connect("http://localhost:2022")

function User() {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
      if(username !== "" && room !== ""){
        if(username)
          socket.emit("join_room",room)
          setShowChat(true)
      }
    }
    return ( 
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3 className='border border-danger p-3'> <span className='text-danger'> E</span>pati </h3>
          <input
            type="text"
            className="text-center"
            placeholder="Add your name..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="checkbox"
            className="roomInput"
            id="room"
            required
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
    
    );
}
export default User;
if (document.getElementById('user')) {
    ReactDOM.render(<User />, document.getElementById('user'));
}
