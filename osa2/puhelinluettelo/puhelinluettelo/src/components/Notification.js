import React from "react";

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return (
    <div className={message.success ? "notification" : "error"}>
      {message.message}
    </div>
  );
};

export default Notification;
