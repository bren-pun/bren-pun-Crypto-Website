import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import CoinPage from "./components/CoinPage";
import Contact from "./components/Contact";
import Home from "./components/Home";

import Navbar from "./components/Navbar";
import Screener from "./components/Screener";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/screener" element={<Screener />} />
        <Route path="/:id" element={<CoinPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
