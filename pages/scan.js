// pages/scan.js
import { useState } from 'react';
import axios from 'axios';

export default function Scan() {
  const [email, setEmail] = useState('');
  const [scanCount, setScanCount] = useState(null);

  const handleScan = async () => {
    const response = await axios.get(`/api/scan?email=${email}`);
    setScanCount(response.data.scanCount);
  };

  return (
    <div>
      <h1>QR Code Scan Tracker</h1>
      <label>
        Email Address:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <br />
      <button onClick={handleScan}>Track Scans</button>
      {scanCount !== null && <div>
        <h2>Scan Count: {scanCount}</h2>
      </div>}
    </div>
  );
}
