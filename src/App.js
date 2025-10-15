import Home from './components/layout/Home';
import About from './components/layout/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Leadership from './components/layout/Leadership';
import ProjectPortfolio from './components/layout/ProjectPortfolio';
import ProjectDetails from './components/layout/ProjectDetails';
import Blog from './components/layout/Blog';
import BlogDetails from './components/layout/BlogDetails';
import CaseStudies from './components/layout/CaseStudies';
import CaseStudiesDetails from './components/layout/CaseStudiesDetails';
import Newsroom from './components/layout/Newsroom';
import PressRelease from './components/layout/PressRelease';
import PressReleaseDetails from './components/layout/PressReleaseDetails';
import MediaResources from './components/layout/MediaResources';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/leadership-team" element={<Leadership />} />
        <Route path="/project-portfolio" element={<ProjectPortfolio />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog-detail" element={<BlogDetails />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studie-details" element={<CaseStudiesDetails />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path="/press-release" element={<PressRelease />} />
        <Route path="/press-release-details" element={<PressReleaseDetails />} />
        <Route path="/media-resources" element={<MediaResources />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
