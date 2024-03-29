import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/pages/home/Home.js";
import Footer from "./components/Footer";
import Rewards from "./components/pages/rewards/Rewards.js";
import HowItWorks from "./components/pages/How-It-Works";
import Charities from "./components/pages/Charities";
import ConnectUs from "./components/pages/ConnectUs";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Signup from "./components/pages/Sign-Up";
// Added PaymentForm and PaymentSuccess imports
import PaymentForm from "./components/pages/PaymentForm";
import PaymentSuccess from "./components/pages/PaymentSuccess";
import TransactionHistory from "./components/pages/TransactionHistory";
import PointsHistory from "./components/history/PointsHistory.js";
// import TestComponent from './components/pages/TestComponent';
// ... other imports
import RewardsModal from "./components/modal/BadgesModal.js";
import History from "./components/pages/History.js";
import "./App.css";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const App = () => {
  



  return (
    // <Router>
      <AppContent />
    // </Router>
  );
};

const AppContent = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userPurchaseData, setUserPurchaseData] = useState({
    recipient: null,
  });

  const [buttons, setButtons] = useState([]);

  // const location = useLocation();

  const hideNavbarRoutes = []; // Add the routes where you want to hide the navbar
  // const hideNavbarRoutes = ['/how-it-works'];// Add the routes where you want to hide the navbar

  // const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <Router>
      {/* {shouldShowNavbar && <Navbar />} */}
      <Navbar />
      {/* Wrapped the Routes with Elements for Stripe */}
    
      <Elements stripe={stripePromise}>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rewards" element={<Rewards toggleRewardsModal/>} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route
            path="/charities"
            element={<Charities setUserPurchaseData={setUserPurchaseData} />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/connect-us" element={<ConnectUs />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route
            path="/payment"
            element={<PaymentForm recipient={userPurchaseData.recipient} />}
          />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/TransactionHistory" element={<TransactionHistory />} />
          <Route path="/PointsHistory" element={<PointsHistory />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Elements>

      <Footer />
    </Router>
  );
};

export default App;
