import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './views/Home';
import Services from './views/Services';
import Contact from './views/Contact';
import About from './views/About';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
