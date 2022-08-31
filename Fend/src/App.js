import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Add from './Add';
import Home from './Home';
import Check from './Check';

function App() {
  return (
    <>
      <div className="App">
        <h1>APP</h1>
        <Routes>
          <Route path="/" element={<Home />}>  </Route>
          <Route path="/add" element={<Add />}>  </Route>
          <Route path="/check" element={<Add />}>  </Route>

        </Routes>
      </div>
    </>
  );
}

export default App;
