import React from "react";
import ReactDOM from "react-dom";
import * as messages from "./messages";

function App() {
  return (
    <div>
      <h1 className="heading">{messages.appTitle.defaultMessage}</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
