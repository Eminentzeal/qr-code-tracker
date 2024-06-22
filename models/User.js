// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: String,
  fullName: String,
  phoneNumber: String,
  qrCodeUrl: String,
  scanCount: { type: Number, default: 0 }
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
