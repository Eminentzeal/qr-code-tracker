// pages/api/scan.js
import connectMongo from '../../lib/mongodb';
import User from '../../models/User';

export default async function handler(req, res) {
  await connectMongo();

  const { email } = req.query;

  // Find the user by email and increment the scan count
  const user = await User.findOne({ email });
  if (user) {
    user.scanCount += 1;
    await user.save();
    res.status(200).json({ email: user.email, scanCount: user.scanCount });
  } else {
    res.status(404).send('User not found');
  }
}
 // end of pages/api/scan.js