import { Document } from 'mongoose';
export default interface IUser extends Document {
    firstname: String,
    lastname: String,
    birthday: String,
    email: String,
    gender: String,
    password: String,
    phone: String,
    address: String,
    postal_code: String,
    city: String,
    security_number: String
}
