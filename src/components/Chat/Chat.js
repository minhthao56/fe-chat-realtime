import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import "./Chat.scss";

export default function Chat() {
  const [admin, setAdmin] = useState({});

  const ENDPOIN = "http://localhost:4000/";

  useEffect(() => {
    const socket = io(ENDPOIN);

    socket.on("frist", (mes) => alert(mes));

    socket.on("mes", (mes) => setAdmin(mes));

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, []);

  return (
    <div className="chat">
      <div className="chat__title">
        <span>Name room</span>
      </div>
      <div className="chat__display">
        {admin.user && (
          <div className="chat__content">
            <span className="chat__user">{admin.user}</span>
            <span className="chat__mes">{admin.mes}</span>
            <span className="chat__time">10:10pm</span>
          </div>
        )}

        <div className="chat__content">
          <span className="chat__user">User1</span>
          <span className="chat__mes">Are you ok???????</span>
          <span className="chat__time">10:10pm</span>
        </div>
        <div className="chat__content chat__content--current">
          <span className="chat__user chat__user--current">User2</span>
          <span className="chat__mes chat__mes--current">
            I'am OKkkkkkkkkk^^
          </span>
          <span className="chat__time chat__time--current">10:10pm</span>
        </div>
      </div>
      <form className="chat__form">
        <input
          className="chat__input"
          type="text"
          placeholder="Write something..."
        />
        <button type="submit" className="chat__btn">
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
}
