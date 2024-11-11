import React, { useEffect, useState } from "react";
import Popup from "./Popup";

function ServiceRoute({ element }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if the "formSubmitted" cookie is set to true
    const hasSubmitted = document.cookie.includes("formSubmitted=true");
console.log(hasSubmitted)
    // Show popup if the form hasn't been submitted
    if (!hasSubmitted) {
        console.log('true')
      setShowPopup(true);
    }
  }, []); // Triggers only on initial mount

  const handlePopupSubmit = (data) => {
    // Set a "formSubmitted" cookie to prevent the popup from showing again
    document.cookie = "formSubmitted=true; max-age=" + 60 * 60 * 24 * 365 + "; path=/";
    setShowPopup(false); // Hide the popup after successful submission
    window.location.reload();
  };

  const handleClosePopup = () => {
    // Temporarily close the popup without setting the cookie
    setShowPopup(false);
    window.location.reload();
  };

  return (
    <>
      {showPopup && <Popup onClose={handleClosePopup} onSubmit={handlePopupSubmit} />}
      {element}
    </>
  );
}

export default ServiceRoute;
