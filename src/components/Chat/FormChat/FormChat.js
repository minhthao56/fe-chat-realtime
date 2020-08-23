import React, { useState } from "react";
import "./FormChat.scss";

export default function FormChat({ handleSendMes }) {
  const [messenage, setMessage] = useState("");
  const handleMessage = (e) => {
    const value = e.target.value;
    setMessage(value);
  };
  return (
    <form
      className="form"
      onSubmit={(e) => handleSendMes(e, messenage, setMessage)}
    >
      <input
        className="form__input"
        type="text"
        placeholder="Write something..."
        value={messenage}
        onChange={handleMessage}
      />
      <button type="submit" className="form__btn">
        <i className="fas fa-paper-plane"></i>
      </button>
    </form>
  );
}
