import * as mongoose from "mongoose";
import IRdv from "./RdvDBInterface";
const RDVSchema: mongoose.Schema = new mongoose.Schema({
  date: {
    type: Date,
  },
  label: {
    type: String,
  },
  height: {
    type: Number,
  },

  security_number: {
    type: String,
  },
  firstname_pat: {
    type: String,
  },
  lastname_pat: {
    type: String,
  },
  phone_pat: {
    type: String,
  },

  firstname_doc: {
    type: String,
  },
  lastname_doc: {
    type: String,
  },
  city_doc: {
    type: String,
  },
  RPPS: {
    type: String,
  },
});

export default mongoose.model<IRdv>("Rdv", RDVSchema);
