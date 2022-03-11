import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ValuesContext from "./Contexts/ValuesContext";

ReactDOM.render(
  <ValuesContext>
    <App />
  </ValuesContext>,
  document.getElementById("root")
);
