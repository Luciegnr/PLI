import { Document } from "mongoose";
export default interface IRdv extends Document {
  date: Date;
  label: string;
  height: number;
  security_number: string;
  firstname_pat: string;
  lastname_pat: string;
  phone_pat: string;

  firstname_doc: string;
  lastname_doc: string;
  city_doc: string;
  RPPS: string;
}
