import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WomanPage from './Components/WomanPage';
import Home from './Components/Home';
import ManPage from './Components/ManPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/woman" element={<WomanPage />} />
      <Route path="/man" element={<ManPage />} />
      <Route path="/woman" element={<WomanPage />} />
    </Routes>
  </Router>
);

export default App;
