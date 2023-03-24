import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Alltransactions from './components/Alltransactions';
import Main from './components/Main';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route exact path = '/' element={<Main/>}   />
      <Route exact path = '/transactions' element={<Alltransactions/>}   />
    </Routes>
   
    </BrowserRouter>
   
   </>
  );
}

export default App;