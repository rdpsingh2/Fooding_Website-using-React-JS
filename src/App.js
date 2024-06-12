import Landingpage from './Components/LandingPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AdminLogin from "./Components/AdminLogin"
import UserLogin from "./Components/UserLogin"
import AdminSignup from './Components/AdminSignup';
import AdminHomePage from './Components/AdminHomePage';
import Error from './Components/Errorpage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />}/>
        <Route path='/*' element={<Error/>}/>
        <Route path="/admin" element={<AdminLogin/>}/>
        <Route path="/adminsignup" element={<AdminSignup/>}/>;
        <Route path="/user" element={<UserLogin/>}/>  
        <Route path='/adminhomepage/*' element={<AdminHomePage/>}/>    
      </Routes>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
