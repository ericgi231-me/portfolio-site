import { Route, Routes, useLocation } from 'react-router-dom'
import { NotFoundPage, ProjectsPage, GuestBookPage, AboutMePage } from './pages'
import { Header, BackgroundImages } from './components'
import ReactGA from "react-ga4";
import { useEffect } from 'react';

ReactGA.initialize("G-VTTP7LRNBH");

const App = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <div className="min-h-screen relative">
      <BackgroundImages />
      <div className="relative z-10">
        <Header />
        <Routes>
          <Route path="/" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/guestbook" element={<GuestBookPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;