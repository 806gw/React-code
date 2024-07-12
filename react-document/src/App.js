import { BrowserRouter, Routes, Route } from "react-router-dom";
import JsxIntro from "./pages/JsxIntro";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/jsxintro" element={<JsxIntro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
