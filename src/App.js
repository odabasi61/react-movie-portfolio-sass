import { BrowserRouter } from "react-router-dom";
import "./app.scss";
import Router from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
