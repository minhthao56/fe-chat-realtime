import React from "react";
import "./UserInRoom.scss";

export default function UserInRoom({ name }) {
  return (
    <div className="user">
      <div className="user__icon">
        <i className="fas fa-user"></i>
      </div>
      <div className="user__name">
        <span>{name}</span>
      </div>
    </div>
  );
}
