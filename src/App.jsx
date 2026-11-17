import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Guides from './pages/Guides.jsx'
import GuideDetail from './pages/GuideDetail.jsx'
import NotFound from './pages/NotFound.jsx'
import { groups } from './data/services.js'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        {groups.map((g) => <Route key={g.id} path={`services/${g.slug}`} element={<Services group={g.id} />} />)}
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="guides" element={<Guides />} />
        <Route path="guides/:slug" element={<GuideDetail />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
