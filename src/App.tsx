import { Routes, Route } from "react-router-dom";
import Home2 from "./pages/Home2";
import "./styles/global.css";
import "./styles/colors.css";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home2 />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </>
  );
}

export default App;
