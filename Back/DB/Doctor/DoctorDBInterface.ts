import { Document } from 'mongoose';
export default interface IDoctor extends Document {
    firstname: String,
    lastname: String,
    email: String,
    gender: String,
    password: String,
    profession: String,
    address: String,
    postal_code: String,
    phone: String,
    city: String,
    RPPS: String
}
