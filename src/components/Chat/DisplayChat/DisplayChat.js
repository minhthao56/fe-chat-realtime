import React from "react";
import "./DisplayChat.scss";

export default function DisplayChat({ currentName, name, text, time }) {
  return (
    <div className="display">
      <div
        className={
          currentName === name
            ? "display__content display__content--current"
            : "display__content"
        }
      >
        <span
          className={
            currentName === name
              ? "display__user display__user--current"
              : "display__user"
          }
        >
          {name}
        </span>
        <span
          className={
            currentName === name
              ? "display__mes display__mes--current"
              : "display__mes"
          }
        >
          {text}
        </span>
        <span className="display__time">{time}</span>
      </div>
    </div>
  );
}
