import { Request, Response } from "express";
import PatientDB from "../DB/Patient/Ordonnance/OrdonnanceDB";
import PatDB from "../DB/Patient/PatientDB";
const express = require("express");
const route = express.Router();
var gridfs = require("gridfs-stream");

// Fonction permettant de récupérer les informations lorsque qu'un docteur crée une ordonnance pour créer la version pdf
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost/Wivital", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;
gridfs.mongo = mongoose.mongo;
var connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error:"));

connection.once("open", () => {
  var gfs = gridfs(connection.db);
  route.post("/ordonnance/:RPPS", async (req: Request, res: Response) => {
    const info = await PatDB.findOne({
      RPPS: req.params.RPPS,
      firstname_pat: req.body.firstname_pat,
      lastname_pat: req.body.lastname_pat,
      birthday_pat: req.body.birthday,
    });

    let { fait_le, diagnostic, prescription } = req.body;

    if (info != null) {
      const patient = new PatientDB({
        RPPS: info.RPPS,
        doctor_name: info.lastname_doc,
        user_name: info.lastname_pat,
        security_number: info.security_number,
        fait_le,
        diagnostic,
        prescription,
      });
      if (patient != null) {
        const PDFDocument = require("pdfkit");
        const fs = require("fs");
        const doc = new PDFDocument();
        doc.pipe(fs.createWriteStream("uploads/ordonnance.pdf"));

        doc.fontSize(17).text(info.firstname_pat, 20, 30);

        doc.fontSize(17).text(info.lastname_pat, 95, 30);

        doc.fontSize(15).text(info.address_pat, 15, 50);

        doc.fontSize(15).text(info.postal_code_pat, 20, 70);

        doc.fontSize(15).text(info.city_pat, 70, 70);

        doc.fontSize(15).text(info.phone_pat, 20, 90);

        doc.fontSize(15).font("Times-Roman").text("Fait le : ", 370, 200);

        doc.fontSize(17).text(fait_le, 430, 200);

        doc.fontSize(15).font("Helvetica-Bold").text("Diagnostic : ", 60, 300, {
          bold: true,
        });

        doc.fontSize(15);
        doc.font("Times-Roman").text(diagnostic, 144, 300, {
          align: "center",
        });

        doc
          .fontSize(15)
          .font("Helvetica-Bold")
          .text("Prescription : ", 60, 400);

        doc.fontSize(15);
        doc.font("Times-Roman").text(prescription, 162, 400, {
          align: "center",
        });

        doc
          .fillColor("blue")
          .font("Times-Roman")
          .fontSize(15)
          .text(info.firstname_doc, 400, 600);

        doc
          .fillColor("blue")
          .font("Times-Roman")
          .fontSize(15)
          .text(info.lastname_doc, 455, 600);

        doc
          .fillColor("blue")
          .font("Times-Roman")
          .fontSize(15)
          .text(info.address_doc, 400, 620);

        doc
          .fillColor("blue")
          .font("Times-Roman")
          .fontSize(15)
          .text(info.postal_code_doc, 400, 640);

        doc
          .fillColor("blue")
          .font("Times-Roman")
          .fontSize(15)
          .text(info.phone_doc, 400, 680);

        doc
          .fillColor("blue")
          .font("Times-Roman")
          .fontSize(15)
          .text(info.city_doc, 450, 640);

        doc.end();

        var filename = "ordonnance.pdf";

        var writestream = gfs.createWriteStream({
          filename: info.security_number + ".pdf",

          metadata: {
            doctor: info.lastname_doc,
            profession: info.profession,
            date: fait_le,
          },
        });
        fs.createReadStream("uploads/" + filename).pipe(writestream);
        writestream.on("close", (file: any) => {
          res.send("Stored File: " + file.filename);
        });

        return patient.save();
      }
    } else {
      return res.status(500).json({
        message: "Vous n'avez pas encore enregistrer ce patient",
      });
    }
  });

  // Requete permettant de télécharger un pdf via son id 
  route.get("/ordonnance/download", (req: Request, res: Response) => {
    var _id = req.query._id;
    gfs.exist({ _id: _id }, (err: any, file: any) => {
      if (err || !file) {
        return res.status(500).json({
          message: "no",
        });
      }

      var readstream = gfs.createReadStream({ _id: _id });
      readstream.pipe(res);
    });
  });

  // Requete permettant de supprimer une ordonnance
  route.get("/ordonnance/delete", (req: Request, res: Response) => {
    var filename = req.query.filename;

    gfs.exist({ filename: filename }, (err: any, file: any) => {
      if (err || !file) {
        res.status(404).send("Fichier introuvable");
        return;
      }

      gfs.remove({ filename: filename }, (err: any) => {
        if (err) res.status(500).send(err);
        res.send("Fichier Supprimé");
      });
    });
  });

  // Requete permettant de récupérer toutes les ordonnances d'un patient via son numéro de sécurité sociale
  route.get("/ordonnance/meta", (req: Request, res: Response) => {
    var filename = req.query.filename;

    gfs.exist({ filename: filename }, (err: any, file: any) => {
      if (err || !file) {
        return res.status(500).json({
          message: "no",
        });
      }
      gfs.files
        .find({ filename: filename })
        .sort({ metadata: -1 })
        .toArray((err: any, files: any) => {
          if (err) res.send(err);
          res.status(200).json(files);
        });
    });
  });
});

// Requete permettant de récupérer toutes les ordonnances 
route.get("/patient", (req: Request, res: Response) => {
  PatientDB.find()
    .sort({ createdAt: -1 })
    .exec()
    .then((results) => {
      return res.status(200).json({
        ordonnance: results,
        count: results.length,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
});

// Requete permettant de récupérer toutes les ordonnances d'un utilisateur via son numéro de sécurité sociale
route.get("/patient/:security_number", (req: Request, res: Response) => {
  PatientDB.find({ security_number: req.params.security_number })
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
});
module.exports = route;
