import { Request, Response } from "express";
import RdvDB from "../DB/Rendez-vous/RdvDB";
import UsersDB from "./../DB/User/UsersDB";
import DoctorDB from "./../DB/Doctor/DoctorDB";

// Requete permettant de créer un rendez vous côté particulier. 
// Si il renseigne les coordonnées d'un docteur le rdv s'enregistre aussi sur le planning du docteur
const createRdv = async (req: Request, res: Response) => {
  let { date, label } = req.body;
  const User_info = await UsersDB.findOne({
    security_number: req.params.security_number,
  });
  const Doc_info = await DoctorDB.findOne({
    lastname: req.body.lastname_doc,
    firstname: req.body.firstname_doc,
    city: req.body.city_doc,
  });
  if (User_info != null) {
    if (Doc_info != null) {
      const RDV = await new RdvDB({
        firstname_pat: User_info.firstname,
        lastname_pat: User_info.lastname,
        phone_pat: User_info.phone,
        security_number: User_info.security_number,
        lastname_doc: Doc_info.lastname,
        firstname_doc: Doc_info.firstname,
        city_doc: Doc_info.city,
        RPPS: Doc_info.RPPS,
        date,
        label,
        height: 100,
      });
      return RDV.save()
        .then((result) => {
          return res.status(201).json({
            message: "C'est un rendez vous avec un médecin",

            Rdv: result,
          });
        })
        .catch((error) => {
          return res.status(500).json({
            message: error.message,
            error,
          });
        });
    } else {
      const RDV = await new RdvDB({
        security_number: User_info.security_number,
        firstname_pat: User_info.lastname,
        lastname_pat: User_info.firstname,
        phone_pat: User_info.phone,
        lastname_doc: req.body.lastname_doc,
        firstname_doc: req.body.firstname_doc,
        city_doc: req.body.city_doc,
        date,
        label,
        height: 100,
      });
      return RDV.save()
        .then((result) => {
          return res.status(201).json({
            message: "Ce n'est pas un rendez vous avec un médecin",
            Rdv: result,
          });
        })
        .catch((error) => {
          return res.status(500).json({
            message: error.message,
            error,
          });
        });
    }
  } else {
    return res.status(500).json({
      message: "L'utilisateur n'existe pas",
    });
  }
};

// Requete permettant de créer un rendez vous côté docteur. 
// Soit il s'agit d'un rdv avec un patient déjà enregistré soit avec un futur patient
const createRdvDoc = async (req: Request, res: Response) => {
  let { date, label } = req.body;
  const Doc_info = await DoctorDB.findOne({
    RPPS: req.params.RPPS,
  });

  const Patient_info = await UsersDB.findOne({
    lastname: req.body.lastname_pat,
    firstname: req.body.firstname_pat,
    phone: req.body.phone_pat,
  });

  if (Doc_info != null) {
    if (Patient_info != null) {
      const RDV = await new RdvDB({
        firstname_pat: Patient_info.firstname,
        lastname_pat: Patient_info.lastname,
        phone_pat: Patient_info.phone,
        security_number: Patient_info.security_number,
        lastname_doc: Doc_info.lastname,
        firstname_doc: Doc_info.firstname,
        city_doc: Doc_info.city,
        RPPS: Doc_info.RPPS,
        date,
        label,
        height: 100,
      });
      return RDV.save()
        .then((result) => {
          return res.status(200).json({
            Rdv: result,
          });
        })
        .catch((error) => {
          return res.status(500).json({
            message: error.message,
            error,
          });
        });
    } else {
      const RDV = await new RdvDB({
        firstname_pat: req.body.firstname_pat,
        lastname_pat: req.body.lastname_pat,
        phone_pat: req.body.phone_pat,
        lastname_doc: Doc_info.lastname,
        firstname_doc: Doc_info.firstname,
        city_doc: Doc_info.city,
        RPPS: Doc_info.RPPS,
        date,
        label,
        height: 100,
      });
      return RDV.save()
        .then((result) => {
          return res.status(201).json({
            message: "la personne n'est pas encore patient",
            Rdv: result,
          });
        })
        .catch((error) => {
          return res.status(500).json({
            message: error.message,
            error,
          });
        });
    }
  } else {
    return res.status(500).json({
      message: "le docteur n'existe pas ",
    });
  }
};

// Requete permettant de récupérer tous les rendez vous
const getRdv = async (req: Request, res: Response) => {
  const Rdv_Info = await RdvDB.find(req.body)
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

// Requete permettant de récupérer tous les rdv d'un patient via son numéro de sécurité sociale 
const getRdvSécu = async (req: Request, res: Response) => {
  try {
    let rdvs = await RdvDB.find({
      security_number: req.params.security_number,
    }).sort({ date: 1 });
    if (!rdvs) {
      return res.status(404).json({
        message: "error.message",
      });
    } else {
      return res.status(200).json(rdvs);
    }
  } catch {
    res.status(404);
    res.send({ error: "L'utilisateur n'a pas encore de rdv !" });
  }
};

// Requete permettant de récupérer tous les rdv d'un docteur via son rpps 
const getRdvDoc = async (req: Request, res: Response) => {
  try {
    let rdvs = await RdvDB.find({
      RPPS: req.params.RPPS,
    }).sort({ date: 1 });
    if (!rdvs) {
      return res.status(404).json({
        message: "error.message",
      });
    } else {
      return res.status(200).json(rdvs);
    }
  } catch {
    res.status(404);
    res.send({ error: "L'utilisateur n'a pas encore de rdv !" });
  }
};
export default { createRdv, getRdv, getRdvSécu, createRdvDoc, getRdvDoc };
