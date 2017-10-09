import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

export const Admin = mongoose.model('Admin', schema);

export const saveAdmin = ({ firstName, lastName, email, password }) => {
  const admin = new Admin({
    firstName,
    lastName,
    email,
    password,
  });

  admin.save();

  return admin;
}

export const findByEmail = (email) => {
  return Admin.findOne({ email })
}

export const findAll = () => {
  return Admin.find();
}
