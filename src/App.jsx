import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import viteLogo from "/vite.svg";
import "./App.css";
import Auth from "./componets/Auth";
import Home from "./componets/Home";
import Search from "./componets/Search";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Auth /> */}
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/Auth" element={<Auth />} />
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
