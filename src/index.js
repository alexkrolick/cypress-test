import * as React from "react";
import ReactDOM from "react-dom";
import * as l from "./localized";

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1 className="heading">{`${l.appTitle}`}</h1>
      <section className="section">
        <button className="button" onClick={() => setCount(count + 1)}>
          {`${l.clickButtonText}`}
        </button>
        <p>
          <span id="click-count">{`${l.clickCountLabel}`}</span>:{" "}
          <b aria-labelledby="click-count">{count}</b>
        </p>
      </section>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
