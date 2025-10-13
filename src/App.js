import logo from './logo.svg';
import Home from './components/layout/Home';
import About from './components/layout/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Leadership from './components/layout/Leadership';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leadership-team" element={<Leadership />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
