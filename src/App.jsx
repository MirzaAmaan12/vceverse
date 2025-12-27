import { BrowserRouter, Routes, Route } from "react-router-dom";
import Launch from "./pages/Launch";
import DataStargaze from "./pages/DataStargaze";
import AiVerse2 from "./pages/AiVerse2";
import AiVerse3 from "./pages/AiVerse3";
import AiVerse4 from "./pages/AiVerse4";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Launch />} />
        <Route path="/data-stargaze" element={<DataStargaze />} />
        <Route path="/ai-verse-2" element={<AiVerse2 />} />
        <Route path="/ai-verse-3" element={<AiVerse3 />} />
        <Route path="/ai-verse-4" element={<AiVerse4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
