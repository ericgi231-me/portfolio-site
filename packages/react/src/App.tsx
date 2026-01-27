import { Route, Routes } from 'react-router-dom'
import { NotFoundPage, ProjectsPage, GuestBookPage, AboutMePage } from './pages'
import { Header, BackgroundImages } from './components'

const App = () => {
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