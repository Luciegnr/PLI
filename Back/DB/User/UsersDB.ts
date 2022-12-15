import * as mongoose from 'mongoose';
import IUser from './UserDBInterface';

const userSchema : mongoose.Schema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    birthday: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    gender: {
        type: String,
    },
    password: {
        type: String,
    },
   
    address: {
        type: String,
    },
    postal_code: {
        type: String,
    },
    phone: {
        type: String,
        unique: true
    },
    city: {
        type: String,
    },
    security_number:{
        type:String,
        unique: true
    }
})

export default mongoose.model<IUser>('User', userSchema);