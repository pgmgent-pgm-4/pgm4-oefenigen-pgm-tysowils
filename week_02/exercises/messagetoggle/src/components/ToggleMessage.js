import React from "react";

export default function ToggleMessage() {
  const [showMessage, setshowMessage] = React.useState(true);
  const message = "Hello World!";
  function toggleMessage() {
    setshowMessage(!showMessage);
  }
  return (
    <div>
      {showMessage && <p>{message}</p>}
      <button onClick={() => setshowMessage()}>Toggle Message</button>
    </div>
  );
}
