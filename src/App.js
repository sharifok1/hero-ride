// import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePagePoperty from './HomePage/HomePageProperty/HomePagePoperty';
import RegistrationOption from './HomePage/Registration/RegistrationOption/RegistrationOption';
import SignUpAsRider from './HomePage/Registration/SignUp/SignUpAsRider/SignUpAsRider';
import SignUpAsLearner from './HomePage/Registration/SignUp/SignUpAsLearner/SignUpAsLearner';
import AuthProvider from './Hooks/ContextAPI/AuthProvider/AuthProvider';
import Course from './Page/Course/Course';
import Profile from './Page/Profile/Profile';
import Login from './HomePage/Login/Login';
import Admin from './Page/Admin/Admin';




function App() {
  return (
    <div className="App">
    <AuthProvider>
     <BrowserRouter>
     <Header></Header>
    <Routes>
      <Route exact path="/" element={<HomePagePoperty/>}></Route>
      <Route path="/Home" element={<HomePagePoperty/>}></Route>
      <Route path="/signUp" element={<RegistrationOption></RegistrationOption>}></Route>
      <Route path="/SignUpAsRider" element={<SignUpAsRider></SignUpAsRider>}></Route>
      <Route path="/SignUpAsLearner" element={<SignUpAsLearner></SignUpAsLearner>}></Route>
      <Route path="/Login" element={<Login></Login>}></Route>
      <Route path="/Course" element={<Course></Course>}></Route>
      <Route path="/Profile" element={<Profile></Profile>}></Route>
      <Route path="/Admin" element={<Admin></Admin>}></Route>
      
    </Routes>
  </BrowserRouter>
  </AuthProvider>
    </div>
  );
}

export default App;
