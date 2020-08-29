import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";

import DisplayChat from "./DisplayChat/DisplayChat";
import FormChat from "./FormChat/FormChat";
import TitleChart from "./TitleChat/TitleChat";

import "./Chat.scss";
import UserInRoom from "./UserInRoom/UserInRoom";
import { Link } from "react-router-dom";

let socket;
export default function Chat({ userNow }) {
  const [messenages, setMessages] = useState([]);
  const [dataRoom, setDataRoom] = useState([]);
  const ENDPOIN = "http://localhost:4000/";

  if (userNow === undefined) {
    window.location.replace("/");
  }
  const { name, room } = userNow;
  // listen join
  useEffect(() => {
    socket = io(process.env.REACT_APP_URLBE || ENDPOIN);
    socket.emit("join", { name, room }, (err) => alert(err));
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOIN, name, room]);
  // // listen mes
  useEffect(() => {
    socket.on("mes", (mes) => {
      setMessages([...messenages, mes]);
    });
  }, [messenages]);
  useEffect(() => {
    socket.on("dataRoom", (data) => setDataRoom(data));
  }, []);

  const handleSendMes = (e, messenage, setMessage) => {
    e.preventDefault();
    socket.emit("sendMess", messenage, (err) => {
      if (err) {
        alert(err);
      }
    });
    setMessage("");
  };

  ///trim
  const currentName = name.trim().toLowerCase();

  return (
    <div className="container-chat">
      <div className="container">
        <div className="chat">
          <div className="chat__title">
            <TitleChart room={room} dataRoom={[]} />
            <Link className="chat__leave" to="/">
              Leave
            </Link>
          </div>

          <div className="chat__display">
            <ScrollToBottom>
              {messenages.map((item, i) => {
                return (
                  <DisplayChat
                    currentName={currentName}
                    name={item.user.nameTrim}
                    text={item.text}
                    time={item.time}
                    key={i}
                  />
                );
              })}
            </ScrollToBottom>
          </div>
          <FormChat handleSendMes={handleSendMes} />
        </div>
        <div className="room">
          <TitleChart room={room} dataRoom={dataRoom} />
          <div className="room__container">
            {dataRoom.map((item, i) => (
              <UserInRoom name={item.nameTrim} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
