import { Document } from 'mongoose';
export default interface IUrgence extends Document {
    firstname : string,
    lastname: string,
    address: string,
    postal_code: string,
    city: String
    phone: string,
    Blood_group: string,
    allergy: string,
    Organ_Donor: string,
    Urgence_Name: string,
    Urgence_Phone: string,
    security_number: String
}