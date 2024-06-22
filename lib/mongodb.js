// lib/mongodb.js
import mongoose from 'mongoose';

const connectMongo = async () => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return;
  }
  // Use new db connection
  await mongoose.connect('mongodb://localhost:27017/qrCodeTracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectMongo;
