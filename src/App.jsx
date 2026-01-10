import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import DataStargaze from "./pages/DataStargaze";
import AiVerse from "./pages/AiVerse";
import AiVerse2 from "./pages/AiVerse2";
import AiVerse3 from "./pages/AiVerse3";
import AiVerse4 from "./pages/AiVerse4";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/data-stargaze" element={<DataStargaze />} />
        <Route path="/ai-verse" element={<AiVerse />} />
        <Route path="/ai-verse-2" element={<AiVerse2 />} />
        <Route path="/ai-verse-3" element={<AiVerse3 />} />
        <Route path="/ai-verse-4" element={<AiVerse4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
