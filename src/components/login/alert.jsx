import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./alert.css";

const AlertNotification = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New Country Login", description: "Your account was accessed from a new country.", time: "Today 09:45", read: false, image: "https://via.placeholder.com/500" },
    { id: 2, message: "Advertiser Balance is Low", description: "Add funds to avoid interruptions.", time: "Today 09:45", read: false, image: "https://via.placeholder.com/500" },
    { id: 3, message: "Publisher Payment Activated", description: "Payments have been activated.", time: "Today 09:45", read: false, image: "https://via.placeholder.com/500" },
  ]);

  const [selectedNotification, setSelectedNotification] = useState(null);
  const navigate = useNavigate();

  const view = (notif) => {
    setSelectedNotification(notif);
  };

  const closeModal = () => {
    setSelectedNotification(null);
  };

  const handleAccept = (id) => {
    setNotifications(notifications.map(notif => notif.id === id ? { ...notif, read: true } : notif));
    closeModal();
    navigate("/map");  // Redirect to Map Page
  };

  const handleDecline = (id) => {
    alert("Declined");
    setNotifications(notifications.map(notif => notif.id === id ? { ...notif, read: true } : notif));
    closeModal();
  };

  return (
    <div className="alert-container">
      <h2>All Notifications</h2>
      <ul>
        {notifications.map(notif => (
          <li key={notif.id} className={notif.read ? "read" : "unread"}>
            <div className="alert-content">
              <strong>{notif.message}</strong>
              <p>{notif.description}</p>
              <span>{notif.time}</span>
            </div>
            {!notif.read && <button className="view-button" onClick={() => view(notif)}>View</button>}
          </li>
        ))}
      </ul>

      {/* Modal Pop-up */}
      {selectedNotification && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-buttons">
              <button className="accept-button" onClick={() => handleAccept(selectedNotification.id)}>Accept</button>
              <button className="decline-button" onClick={() => handleDecline(selectedNotification.id)}>Decline</button>
            </div>
            <img src={selectedNotification.image} alt="Notification" className="modal-image" />
            <h3>{selectedNotification.message}</h3>
            <p>{selectedNotification.description}</p>
            <button className="close-button" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertNotification;
