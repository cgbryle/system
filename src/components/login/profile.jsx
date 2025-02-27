import React, { useState } from 'react';
import './profile.css'; // Import the CSS file

const Profile = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add more logic here, such as API calls to save the data
    console.log('Form Data Submitted:', formData);
    alert('Profile updated successfully!');
  };

  return (
    <div className="Profile-form-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            required // Add required attribute for validation
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required // Add required attribute for validation
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            placeholder="Enter your bio"
            value={formData.bio}
            onChange={handleInputChange}
            rows="4" // Use textarea for bio
          />
        </div>
        <button type="submit" className="save-button">
          Save
        </button>
      </form>
    </div>
  );
};

export default Profile;