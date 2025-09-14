import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotesList from "./pages/NotesList";
import CreateNote from "./pages/CreateNote";
import "./styles/App.css"; // ✅ global styles

// ✅ import toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar always visible */}
        <Navbar />

        {/* Main content */}
        <main className="container animate-fadeIn">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<NotesList />} />
            <Route path="/create" element={<CreateNote />} />
          </Routes>
        </main>

        {/* ✅ Toastify container (add once, works globally) */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
};

export default App;
