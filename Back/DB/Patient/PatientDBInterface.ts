import { Document } from "mongoose";
export default interface IUPat extends Document {
  RPPS: String;
  firstname_doc: string;
  lastname_doc: string;
  profession: string;
  city_doc: string;
  postal_code_doc: string;
  address_doc: string;
  phone_doc: string;

  firstname_pat: string;
  lastname_pat: string;
  address_pat: string;
  postal_code_pat: string;
  city_pat: string;
  phone_pat: string;
  first_consultation: string;
  allergy_pat: string;
  birthday_pat: string;

  security_number: string;
}
