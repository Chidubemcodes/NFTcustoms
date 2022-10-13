import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" element={<Body />}>
        <Route index element={<Body />} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
