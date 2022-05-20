import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Student from './components/Student';
import Contact from './components/Contact';
import Parts from './components/Parts';
function App() {
  return (
    <BrowserRouter>
    
      <Home />
      <Routes>
      <Route path="/" element={<Parts/>} />
      <Route path="/student" element={<Student/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
    
    </BrowserRouter>
  );
}

export default App;
