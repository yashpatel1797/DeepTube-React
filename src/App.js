import { Routes, Route } from "react-router-dom";
import { Home, VideoListing } from './pages'
import { Navbar, Footer } from './components'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<VideoListing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
