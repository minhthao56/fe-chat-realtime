import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Join.scss";

export default function Join({ passUserToApp }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  let history = useHistory();

  const hanleChangeName = (e) => {
    const value = e.target.value;
    setName(value);
  };
  const hanleChangeRoom = (e) => {
    const value = e.target.value;
    setRoom(value);
  };

  const hanldeSubmitUser = (e) => {
    e.preventDefault();
    if (name && room) {
      history.push("/chat");
      return passUserToApp({ name, room });
    }
  };

  return (
    <div className="join">
      <div className="join__title">
        <span>Chat Room !!!</span>
      </div>
      <form className="join__form" onSubmit={hanldeSubmitUser}>
        <input
          type="text"
          placeholder="Your name"
          className="join__input"
          value={name}
          onChange={hanleChangeName}
          required
        />
        <input
          type="text"
          placeholder="Room"
          className="join__input"
          value={room}
          onChange={hanleChangeRoom}
          required
        />
        <button type="submit" className="join__btn">
          Go To Room
        </button>
      </form>
    </div>
  );
}
