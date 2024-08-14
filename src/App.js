
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Home from './Home';
import Info from './info';
 import Navbar from './Navbar';
 import Edit from './edit';
 import Employeelist from './employeelist';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/employeelist" element={<Employeelist />} />
      </Routes>   

    </Router>
  );
}

export default App;
