import { Document } from 'mongoose';
export default interface IPatient extends Document {
    RPPS: String,
    firstname_pat: String,
    lastname_pat: String,
    birthday_pat: String,
    fait_le: String,
    diagnostic: String,
    prescription: String
}