import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listings from './pages/Listings';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Listings />} />
      </Routes>
    </Router>
  );
}

export default App;
