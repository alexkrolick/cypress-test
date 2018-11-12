import * as React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import * as l from "./localized";

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <section className="section">
      <button className="button" onClick={() => setCount(count + 1)}>
        {`${l.clickButtonText}`}
      </button>
      <p>
        <span id="click-count">{`${l.clickCountLabel}`}</span>:{" "}
        <b aria-labelledby="click-count">{count}</b>
      </p>
    </section>
  );
}

function Home() {
  return <section className="section">Welcome to the homepage</section>;
}

function App() {
  return (
    <div>
      <h1 className="heading">{`${l.appTitle}`}</h1>
      <p>
        <Link to="/" data-testid="link-home">
          Home
        </Link>{" "}
        |{" "}
        <Link to="/counter" data-testid="link-counter">
          Counter Game
        </Link>
      </p>
      <Router>
        <Home default />
        <Counter path="/counter" />
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
