import * as mongoose from 'mongoose';
import IDoctor from './DoctorDBInterface';

const doctorSchema : mongoose.Schema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
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
    profession: {
        type:String,
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
    RPPS:{
        type:String,
        unique: true
    }
})

export default mongoose.model<IDoctor>('Doctor', doctorSchema);