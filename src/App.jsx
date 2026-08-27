import { Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
         <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
