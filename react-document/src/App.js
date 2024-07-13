import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import JsxIntro from "./pages/주요 개념/JsxIntro.jsx";
import ElementLender from "./pages/주요 개념/ElementLender.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/jsxIntro" element={<JsxIntro />} />
        <Route path="/elementLender" element={<ElementLender />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
