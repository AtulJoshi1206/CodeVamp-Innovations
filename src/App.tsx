
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectDetail } from './pages/ProjectDetail';
import { InternshipDetail } from './pages/InternshipDetail';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/internships/:id" element={<InternshipDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;