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
import MediaCoverages from './components/layout/MediaCoverages';
import Contact from './components/layout/Contact';
import Awards from './components/layout/Awards';
import Culture from './components/layout/Culture';
import Faqs from './components/layout/Faqs';
import PreDevelopment from './components/layout/PreDevelopment';
import EPCProject from './components/layout/EPCProject';
import GridInfrastructure from './components/layout/GridInfrastructure';
import Independent from './components/layout/Independent';
import Career from './components/layout/Career';
import Investors from './components/layout/Investors';

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
        <Route path="/media-coverages" element={<MediaCoverages />} />
        <Route path="/media-resources" element={<MediaResources />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/pre-development" element={<PreDevelopment />} />
        <Route path="/epc-project" element={<EPCProject />} />
        <Route path="/grid-infrastructure" element={<GridInfrastructure />} />
        <Route path="/independent-power-producer" element={<Independent />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/investors" element={<Investors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
