import React from "react";
import {useState} from "react";
// import "./App.css";

function Points ({donationAmount}) {

const[points, setPoints] = useState(0);
const [showModal, setShowModal] = useState(false);

const updatePoints = (amount) => {
    // Calculate points earned for the current donation
    const earnedPoints = Math.floor(amount); // Assuming 1 point per dollar

    // Update total points
    setPoints((prevPoints) => prevPoints + earnedPoints);

    // Check if the user has earned an additional bonus (2 points) for every 100 points
    if (points >= 100) {
      setPoints((prevPoints) => prevPoints + 2);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };


  // Call the updatePoints function when a donation is made
  updatePoints(donationAmount);


    return (
        <div>
        <h1>You've Earned {points} Points</h1>
          
        {showModal && <BadgeModal onClose={closeModal} />}
      </div>
    );
}

export default Points;