import React from "react";

const MapView = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Location Map</h2>
      <iframe
        title="Google Map"
        width="80%"
        height="500px"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=New+York"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MapView;
