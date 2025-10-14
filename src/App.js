import Home from './components/layout/Home';
import About from './components/layout/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Leadership from './components/layout/Leadership';
import ProjectPortfolio from './components/layout/ProjectPortfolio';
import ProjectDetails from './components/layout/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/leadership-team" element={<Leadership />} />
        <Route path="/project-portfolio" element={<ProjectPortfolio />} />
        <Route path="/project-details" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
