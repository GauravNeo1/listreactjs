import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import Course from './components/Course';
import Enquire from './components/Enquire';
import UserEnquiry from './components/UserEnquiry';
import NavBarr from './components/NavBarr';
import { BrowserRouter, Router, Routes, Route} from 'react-router-dom';





function App() {
  return (
    
    <div>
      
      
    
        <BrowserRouter>
        <NavBarr />
          <Routes>
            <Route path="/" element={<Product/>}/>
            <Route path="/course" element={<Course/>}/>
            <Route path="/userenquiry" element={<UserEnquiry/>}/>
            <Route path="/course/enquire/:id"  element={<Enquire/>}/>
           
          </Routes>
        </BrowserRouter>
     
   
    </div>
  );
}

export default App;
