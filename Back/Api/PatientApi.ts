import { Request, Response } from "express";
import PatDB from "../DB/Patient/PatientDB";
import UsersDB from "./../DB/User/UsersDB";
import DocDB from "./../DB/Doctor/DoctorDB";

// Requete permettant de créeer un patient, le docteur crée un patient en renseignant le numéro de securité sociale
// il faut que le particulier se soit crée son compte au préalable pour qu'il soit enregistré en tant que patient
const createpat = async (req: Request, res: Response) => {
  let { first_consultation } = req.body;

  const Doc_info = await DocDB.findOne({ RPPS: req.params.RPPS });
  const User_info = await UsersDB.findOne({
    security_number: req.body.security_number,
  });
  const pat_exist = await PatDB.findOne({
    RPPS: req.params.RPPS,
    security_number: req.body.security_number,
  });

  if (Doc_info != null) {
    if (User_info != null) {
      if (pat_exist == null) {
        const Pat = await new PatDB({
          firstname_pat: User_info.firstname,
          lastname_pat: User_info.lastname,
          address_pat: User_info.address,
          postal_code_pat: User_info.postal_code,
          city_pat: User_info.city,
          security_number: User_info.security_number,
          phone_pat: User_info.phone,
          birthday_pat: User_info.birthday,

          RPPS: Doc_info.RPPS,
          lastname_doc: Doc_info.lastname,
          firstname_doc: Doc_info.firstname,
          profession: Doc_info.profession,
          city_doc: Doc_info.city,
          postal_code_doc: Doc_info.postal_code,
          address_doc: Doc_info.address,
          phone_doc: Doc_info.phone,
          first_consultation,
        });
        return Pat.save()
          .then((result) => {
            return res.status(201).json({
              Urgence: result,
            });
          })
          .catch((error) => {
            return res.status(500).json({
              message: error.message,
              error,
            });
          });
      } else {
        return res.status(403).json({
          message: "Vous avez déja ce patient",
        });
      }
    } else {
      return res.status(400).json({
        message: "le particulier n'existe pas'",
      });
    }
  } else {
    return res.status(500).json({
      message: "le docteur n'existe pas",
    });
  }
};

// Requete permettant de récupérer tous les patients d'un docteur via son rpps
const patRPPS = (req: Request, res: Response) => {
  PatDB.find({ RPPS: req.params.RPPS })
    .exec()
    .then((results) => {
      return res.status(200).json(results);
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

// Requete permettant de récupérer tous les docteurs d'un patient via son numéro de sécu 
const getdocsecu = (req: Request, res: Response) => {
  PatDB.find({ security_number: req.params.security_number })
    .exec()
    .then((results) => {
      return res.status(200).json(results);
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

// Requete permettant de récupérer tous les docteurs de la db
const getpatients = (req: Request, res: Response) => {
  PatDB.find()
    .exec()
    .then((results) => {
      return res.status(200).json({
        patients: results,
        count: results.length,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

// Requete permettant de supprimer un patient
const deletepatient = (req: Request, res: Response) => {
  PatDB.deleteOne({
    RPPS: req.params.RPPS,
    security_number: req.params.security_number,
  })
    .exec()
    .then((results) => {
      return res.status(200).json(results);
    })
    .catch((error) => {
      return res.status(404).json({
        message: error.message,
        error,
      });
    });
};

export default {
  createpat,
  getpatRPPS,
  getdocsecu,
  getpatients,
  deletepatient,
};
