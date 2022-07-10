import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  password: String,
  name: String,
  photo: String
});

export default model('User', UserSchema);