import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import Layout from "./pages/Layout";

// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
import Navbar from "./pages/Navbar";
import Home from "./pages/HomeScreen";

// https://github.com/Ade-mir/react-js-personal-portfolio/blob/main/src/Pages/Home/MyPortfolio.jsx
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>

  );
}

export default App;