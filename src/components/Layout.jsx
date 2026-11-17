import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ScrollProgress from './ScrollProgress.jsx'
import BackToTop from './BackToTop.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import MobileBar from './MobileBar.jsx'

export default function Layout() {
  const { pathname } = useLocation()
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <ScrollToTop />
      <ScrollProgress />
      <Header />
      <main id="main" key={pathname} className="page"><Outlet /></main>
      <Footer />
      <BackToTop />
      <MobileBar />
    </>
  )
}
