import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Feedback from './pages/Feedback';
import About from './pages/About';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Blogs from "./pages/Blogs";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import Contribute from "./pages/Contribute";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-neutral-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contribute" element={<Contribute />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;