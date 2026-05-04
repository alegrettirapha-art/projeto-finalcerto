import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List"
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<List />} />
        <Route path="/criar" element={<Create />} />
        <Route path="/editar/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;