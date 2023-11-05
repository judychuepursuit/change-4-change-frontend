import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import HowItWorks from './components/pages/How-It-Works';
import Rewards from './components/pages/Rewards';
import Charities from './components/pages/Charities';
import ContactUs from './components/pages/ContactUs';
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage";
import SignUp from './components/pages/Sign-Up';
// import FourOFour from "./pages/FourOFour";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/rewards' element={<Rewards />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/how-it-works' element={<HowItWorks />} />
        <Route path='/charities' element={<Charities />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path='*' element={<FourOFour />} />
        <Route path='/pages/*' element={FourOFour}></Route> */}
        {/* <Route path="/pages/*" element={<FourOFour />} /> */}
      </Routes>
    </Router>
  );
}
export default App;


// import React from "react";
// import Navbar from "./components/Navbar";
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//     </div>
//   );
// }

// export default App;
