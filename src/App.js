import { Route, Routes } from "react-router-dom";
import CoinPage from "./components/CoinPage";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CoinPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
