import * as mongoose from "mongoose";
import IPatient from "./OrdonnanceDBInterface";

const PatientSchema: mongoose.Schema = new mongoose.Schema(
  {
    RPPS: {
      type: String,
    },
    firstname_pat: {
      type: String,
    },
    lastname_pat: {
      type: String,
    },
    birthday_pat: {
      type: String,
    },

    fait_le: {
      type: String,
    },
    diagnostic: {
      type: String,
    },
    prescription: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IPatient>("Patient", PatientSchema);
