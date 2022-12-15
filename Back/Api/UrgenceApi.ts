import {Request, Response} from 'express';
import UrgenceDB from '../DB/User/Urgence/UrgenceDB';
import UsersDB from "./../DB/User/UsersDB";

// Requete permettant au patient de créer sa fiche urgence grace à son numéro de sécurité sociale
const createUrgence = async (req: Request, res: Response) => {
	let { Blood_group, allergy, Organ_Donor, Urgence_Name, Urgence_Phone} = req.body
	const User_info = await UsersDB.findOne({ security_number: req.params.security_number })

	if (User_info != null) {
	const Urgence = await new UrgenceDB({
		firstname: User_info.firstname,
		lastname: User_info.lastname,
		address: User_info.address,
		postal_code: User_info.postal_code,
		city: User_info.city,
		security_number: User_info.security_number,
		phone: User_info.phone,
		Blood_group,
		allergy,
		Organ_Donor,
		Urgence_Name,
		Urgence_Phone
	})
	return Urgence.save().then(result => {
		return res.status(201).json({
			Urgence: result
		});
	}).catch(error => {
		return res.status(500).json({
			message: error.message,
		error
		});
	})
}
}

// Requete permettant de récupérer toutes les fiche urgence des utilisateurs
const getUrgenceName = async (req: Request, res: Response) => {
	const Urgence_Info = await UrgenceDB.find(req.body).exec().then(results => {
		return res.status(200).json(results)
	}).catch(error => {
		return res.status(500).json({
			message: error.message,
			error
		})
	})
}

// Requete permettant de récupérer la fiche urgence d'un utilisateur grace à son numéro de sécurité sociale
const geturgenceRPPS = async(req: Request, res: Response) => {
	try {
		let user = await UrgenceDB.findOne({
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
		res.send({ error: "L'utilisateur n'a pas de fiche urgence" });
	  }
}

// Requete permettant de mettre à jour les informations de la fiche urgence d'un utilisateur via son numéro de sécurité sociale 
const updateuser = async (req: Request, res: Response) => {
	const Urgence_Info = await UrgenceDB.findOne({security_number: req.params.security_number})
	try {
		if(Urgence_Info != null){
			if (req.body.phone) {
				Urgence_Info.phone = req.body.phone
			}
			if (req.body.Blood_group) {
				Urgence_Info.Blood_group = req.body.Blood_group
			}
			if (req.body.allergy) {
				Urgence_Info.allergy = req.body.allergy
			}
			if (req.body.Organ_Donor) {
				Urgence_Info.Organ_Donor = req.body.Organ_Donor
			}
			if (req.body.Urgence_Name) {
				Urgence_Info.Urgence_Name = req.body.Urgence_Name
			}
			if (req.body.Urgence_Phone) {
				Urgence_Info.Urgence_Phone = req.body.Urgence_Phone
			}
			await Urgence_Info.save();
			res.send(Urgence_Info);
		}
	} catch {
		res.status(404)
		res.send({ error: "Fiche urgence introuvable" })
	}
}

export default {createUrgence, getUrgenceName, geturgenceRPPS, updateuser};