import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Submit } from './Submit';

function App() { 
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/submit' element={<Submit/>}/>
      </Routes>
    </Router> 
  );
}
export default App;