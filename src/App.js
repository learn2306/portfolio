import { Container } from 'react-bootstrap';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './page/Main';
import Navbar from './component/Navbar';
import About from './page/About';
import Work01 from './page/Work01';
import Work02 from './page/Work02';
import Work03 from './page/Work03';
import Work04 from './page/Work04';
import Work05 from './page/Work05';
import Work06 from './page/Work06';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/about' element={<About />} />
        <Route path='/work01' element={<Work01 />} />
        <Route path='/work02' element={<Work02 />} />
        <Route path='/work03' element={<Work03 />} />
        <Route path='/work04' element={<Work04 />} />
        <Route path='/work05' element={<Work05 />} />
        <Route path='/work06' element={<Work06 />} />
      </Routes>
    </Container>    
  );
}

export default App;
