// pages/index.js
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    phoneNumber: ''
  });
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/submit', formData);
    setQrCodeUrl(response.data.qrCodeUrl);
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email Address:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Generate QR Code</button>
      </form>
      {qrCodeUrl && <div>
        <h2>Your QR Code:</h2>
        <img src={qrCodeUrl} alt="QR Code" />
      </div>}
    </div>
  );
}
