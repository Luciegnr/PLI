import * as mongoose from 'mongoose';
import IUrgence from './UrgenceDBInterface';
const UrgenceSchema: mongoose.Schema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    address: {
        type: String,
    },
    postal_code: {
        type: String,
    },
    city: {
        type: String,
    },
    phone: {
        type: String,
        unique: true
    },
    Blood_group: {
        type: String,
    },
    allergy: {
        type: String,
    },
    Organ_Donor: {
        type: String,
    },
    Urgence_Name: {
        type: String,
    },
    Urgence_Phone: {
        type: String,
    },
    security_number:{
        type: String,
        unique: true
    }

});
export default mongoose.model<IUrgence>('Urgence', UrgenceSchema);