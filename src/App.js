import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import CarDetail from "./pages/CarDetail";
import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/search-result" element={<SearchResult />} />
          <Route path="/car-detail/:id" element={<CarDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
