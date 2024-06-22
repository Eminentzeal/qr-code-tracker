// pages/api/submit.js
import connectMongo from '../../lib/mongodb';
import User from '../../models/User';
import QRCode from 'qrcode';

export default async function handler(req, res) {
  await connectMongo();

  const { email, fullName, phoneNumber } = req.body;

  // Generate QR code
  const qrCodeUrl = await QRCode.toDataURL(email);

  // Save user data and QR code URL to the database
  const newUser = new User({ email, fullName, phoneNumber, qrCodeUrl });
  await newUser.save();

  res.status(200).json({ qrCodeUrl });
}
