import { Request, Response } from "express";
import DoctorDB from "../DB/Doctor/DoctorDB";
import { check, validationResult } from "express-validator";

// Requete pour créer un docteur avec tous les champs nécessaires à la création d'un compte
const createdoctor = (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(404).json({ messages: errors });
  } else {
    let {
      firstname,
      lastname,
      email,
      gender,
      password,
      profession,
      phone,
      address,
      postal_code,
      city,
      RPPS,
    } = req.body;
    const doctor = new DoctorDB({
      firstname,
      lastname,
      email,
      gender,
      password,
      profession,
      phone,
      address,
      postal_code,
      city,
      RPPS,
    });
    return doctor
      .save()
      .then((result) => {
        return res.status(201).json({
          doctor: result,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          message: error.message,
          error,
        });
      });
  }
};

//Requete permettant de récupérer tous les doctors de la db
const getdoctors = (req: Request, res: Response) => {
  DoctorDB.find()
    .exec()
    .then((results) => {
      return res.status(200).json({
        doctor: results,
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

//Requete permettant de récupérer les infos d'un docteur via son rpps
const getdoctorRPPS = (req: Request, res: Response) => {
  DoctorDB.findOne({ RPPS: req.params.RPPS })
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

// Requete permettant de supprimer un compte docteur
const deletedoctor = (req: Request, res: Response) => {
  DoctorDB.deleteOne({ RPPS: req.params.RPPS })
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

// Requete permettant de mettre à jour les informations personnelles du docteur et de son cabinet
const updatedoctor = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(404).json({ messages: errors });
  } else {
    const UpdateByRPPS = await DoctorDB.findOne({ RPPS: req.params.RPPS });
    try {
      if (UpdateByRPPS != null) {
        if (req.body.firstname) {
          UpdateByRPPS.firstname = req.body.firstname;
        }
        if (req.body.lastname) {
          UpdateByRPPS.lastname = req.body.lastname;
        }
        if (req.body.gender) {
          UpdateByRPPS.gender = req.body.gender;
        }
        if (req.body.profession) {
          UpdateByRPPS.profession = req.body.profession;
        }
        if (req.body.RPPS) {
          UpdateByRPPS.RPPS = req.body.RPPS;
        }
        if (req.body.email) {
          UpdateByRPPS.email = req.body.email;
        }
        if (req.body.password) {
          UpdateByRPPS.password = req.body.password;
        }

        if (req.body.phone) {
          UpdateByRPPS.phone = req.body.phone;
        }

        if (req.body.address) {
          UpdateByRPPS.address = req.body.address;
        }

        if (req.body.postal_code) {
          UpdateByRPPS.postal_code = req.body.postal_code;
        }

        if (req.body.city) {
          UpdateByRPPS.city = req.body.city;
        }
        await UpdateByRPPS.save();
        res.send(UpdateByRPPS);
      }
    } catch {
      res.status(404);
      res.send({ error: "Le docteur n'existe pas" });
    }
  }
};

// Requete permettant au docteur de s'identifier pour accéder à son espace
const doctorlogin = (req: Request, res: Response) => {
  DoctorDB.findOne({ email: req.body.email })
    .exec()
    .then((DoctorDB) => {
      if (!DoctorDB) res.status(404).json("Email invalide");
      else {
        if (req.body.password == DoctorDB.password) {
          res.status(200).json(DoctorDB);
        } else {
          res.status(500).json("Mot de passe invalide");
        }
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

export default {
  getdoctors,
  createdoctor,
  getdoctorRPPS,
  deletedoctor,
  updatedoctor,
  doctorlogin,
};
