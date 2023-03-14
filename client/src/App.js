import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listings from './pages/Listings';
import AddPost from './pages/AddPost';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Listings />} />
        <Route path='/newlisting' element={<AddPost />} />
      </Routes>
    </Router>
  );
}

export default App;
