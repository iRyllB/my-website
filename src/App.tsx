import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GraphicDesign from "./pages/GraphicDesign";
import WebDevelopment from "./pages/WebDevelopment";
import UiUxDesign from "./pages/UiUxDesign";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/graphic-design" element={<GraphicDesign />} />
      <Route path="/web-development" element={<WebDevelopment />} />
      <Route path="/ui-ux-design" element={<UiUxDesign />} />
    </Routes>
  );
}

export default App;