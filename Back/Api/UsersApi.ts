import { Request, Response } from "express";
import UsersDB from "../DB/User/UsersDB";
import { check, validationResult } from 'express-validator';

// Requete permettant de créer un compte utilisateur
const createusers = (req: Request, res: Response) => {
  
      const user = new UsersDB({
        firstname: req.body.firstname,
        email: req.body.email,
        lastname : req.body.lastname,
        birthday: req.body.birthday,
        gender: req.body.gender,
        password: req.body.password,
        phone: req.body.phone,
        address: req.body.address,
        postal_code: req.body.postal_code,
        city: req.body.city,
        security_number: req.body.security_number,
      });
      return user
        .save()
        .then((result) => {
          return res.status(201).json({
            user: result,
          });
        })
        .catch((error) => {
          return res.status(500).json({
            message: error.message,
            error,
          });
        });
   
};

//Requete permettant de récupérer tous les utilisateurs
const getusers = (req: Request, res: Response) => {
  UsersDB.find()
    .exec()
    .then((results) => {
      return res.status(200).json({
        users: results,
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

// Requete permettant de récupérer les information d'un utilisateur via son numéro de sécurité sociale
const getuserRPPS = async (req: Request, res: Response) => {
  try {
    let user = await UsersDB.findOne({
      security_number: req.params.security_number,
    });
    if (!user) {
      return res.status(404).json({
        message: "error.message",
      });
    }else {
      return res.status(200).json(user);
    }
    
  } catch {
    res.status(404);
    res.send({ error: "L'utilisateur n'existe pas" });
  }
};

// Requete permettant de supprimé le compte d'un utilisateur
const deleteuser = (req: Request, res: Response) => {
  UsersDB.deleteOne({ security_number: req.params.security_number })
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

// Requete permettant de mettre à jour les indormation personnelles de l'utilisateur
const updateuser = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
        res.status(404).json({messages: errors});
  } else {
    const UpdateByRPPS = await UsersDB.findOne({
      security_number: req.params.security_number,
    });
    try {
      if (UpdateByRPPS != null) {
        if (req.body.firstname) {
          UpdateByRPPS.firstname = req.body.firstname;
        }
        if (req.body.lastname) {
          UpdateByRPPS.lastname = req.body.lastname;
        }
        if (req.body.birthday) {
          UpdateByRPPS.birthday = req.body.birthday;
        }
        if (req.body.gender) {
          UpdateByRPPS.gender = req.body.gender;
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
      return res.status(500).json({
        message: "NO",
      });
    }
  }
};

// Requete permettant à un utilisateur de s'authentifier
const userlogin = (req: Request, res: Response) => {
  UsersDB.findOne({ email: req.body.email })
    .exec()
    .then((UsersDB) => {
      if (!UsersDB) res.status(404).json("Email incorrecte");
      else {
        if (req.body.password == UsersDB.password) {
          return res.status(201).json({
            user: UsersDB,
          });
          res.status(200).json("Connexion réussi");
        } else {
          res.status(500).json("Mot de passe incorrecte");
        }
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

export default { getusers, createusers, getuserRPPS, deleteuser, updateuser, userlogin };
