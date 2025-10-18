import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CSpinner, useColorModes } from '@coreui/react'


// import '../src/components/admin2/scss/style.scss'
// import '../src/components/admin2/scss/examples.scss'

// Layouts
import Home from './components/layout/Home'
import About from './components/layout/About'
import Leadership from './components/layout/Leadership'
import ProjectPortfolio from './components/layout/ProjectPortfolio'
import ProjectDetails from './components/layout/ProjectDetails'
import Blog from './components/layout/Blog'
import BlogDetails from './components/layout/BlogDetails'
import CaseStudies from './components/layout/CaseStudies'
import CaseStudiesDetails from './components/layout/CaseStudiesDetails'
import Newsroom from './components/layout/Newsroom'
import PressRelease from './components/layout/PressRelease'
import PressReleaseDetails from './components/layout/PressReleaseDetails'
import MediaResources from './components/layout/MediaResources'
import MediaCoverages from './components/layout/MediaCoverages'
import Contact from './components/layout/Contact'
import Awards from './components/layout/Awards'
import Culture from './components/layout/Culture'
import Faqs from './components/layout/Faqs'
import PreDevelopment from './components/layout/PreDevelopment'
import EPCProject from './components/layout/EPCProject'
import GridInfrastructure from './components/layout/GridInfrastructure'
import Independent from './components/layout/Independent'
import Career from './components/layout/Career'
import Investors from './components/layout/Investors'

// Admin
// import AdminLogin from '../src/components/admin2/DefaultLayout'

// Lazy-loaded CoreUI components
const DefaultLayout = React.lazy(() => import('../src/components/admin2/layout/DefaultLayout'))
const Register = React.lazy(() => import('../src/components/admin2/views/pages/register/Register'))
const Page404 = React.lazy(() => import('../src/components/admin2/views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('../src/components/admin2/views/pages/page500/Page500'))

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* 🌐 Main Website Routes */}
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
          {/* Admin Entry Point */}
          <Route path="/admin" element={<Register />} />
        </Routes>
      </BrowserRouter>

      {/* ⚙️ Admin Dashboard (CoreUI) */}
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <BrowserRouter basename="/admin-panel">
          <Routes>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/404" element={<Page404 />} />
            <Route exact path="/500" element={<Page500 />} />
            <Route path="*" element={<DefaultLayout />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App
