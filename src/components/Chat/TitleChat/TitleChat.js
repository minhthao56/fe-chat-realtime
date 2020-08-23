import React from "react";
import "./TitleChat.scss";

export default function TitleChat({ room, dataRoom }) {
  return (
    <div className="title">
      <span>
        Room: {room}
        {dataRoom.length ? (
          <span>
            ({" "}
            <b style={{ color: "#4c7dfd", fontSize: 12 }}>
              {`${dataRoom.length} user(s)`}{" "}
            </b>
            )
          </span>
        ) : null}
      </span>
    </div>
  );
}
