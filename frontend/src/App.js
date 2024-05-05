import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import JoinEvent from './pages/JoinEvent';
import HostEvent from './pages/HostEvent';
import ManageEvent from './pages/ManageEvent';

function App() {
  return (
    <Router>
      <div className="App">
              <NavBar />
              <div className="content">
                <Routes>
                  <Route exact path="/join" element={<JoinEvent/>}/>
                  <Route exact path="/host" element={<HostEvent/>}/>
                  <Route exact path="/manage" element={<ManageEvent/>}/>
                </Routes>
              </div>
          </div>
    </Router>
  );
}

export default App;
