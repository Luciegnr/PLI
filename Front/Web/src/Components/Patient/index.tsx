import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Axios from "axios";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import config from "../../Config/config";
import Alert from "@material-ui/lab/Alert";
import {
  Container,
  FormButton,
  FormWrap,
  FormContent,
  Form,
  Formbis,
  Titre,
} from "./PatientElements"
let i = 0;

function Patient(props: any) {
  const getRPPS = localStorage.getItem("data_doc");
  const url = config.url.url_pat + `${getRPPS}`;
  const url2 = config.url.url_base + `${getRPPS}`;
  const [posts, setPosts] = useState<any[]>([]);
  const [status, setStatus] = useState("");
  const history = useHistory();
  const [data, setLoginData] = useState({
    security_number: "",
    first_consultation: "",
  });

  const [Patientdata, setLoginDatas] = useState({
    doctors: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      profession: "",
      phone: "",
      address: "",
      postal_code: "",
      city: "",
      gender: "",
      RPPS: "",
    },
  });

  // Fonction pour recuperer en bdd les infos lors de validation du formulaire
  function submit(e: any) {
    e.preventDefault();
    Axios.post(url, {
      security_number: data.security_number,
      first_consultation: data.first_consultation,
    })
      .then((res) => {
        setStatus(String(res.status));
        history.push(config.path.path_patient);
      })
      .catch((err) => {
        setLoginData({ ...data });
        setStatus(String(err.response.status));
      });
  }

// Affichage des données en GET
  function getData(url2: string) {
    // Appel d'axios 1 fois
    if (i === 0) {
      Axios.get(url2)
        .then((res) => {
          i++;
          //Stockage des informations dans doctors
          setLoginDatas({ doctors: res.data });
        })
        .catch((err) => {
          setLoginDatas({ ...Patientdata });
        });
    }
  }
  // Get les données de l'api
  getData(url2);

  useEffect(() => {
    Axios.get(config.url.url_pat + `${getRPPS}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // Fonction pour enregistrer les strings des formulaires
  function handle(e: any) {
    const newData: any = { ...data };
    newData[e.target.id] = e.target.value;
    setLoginData(newData);
  }

  // Fonction pour reload la page lors du changement d'une information
  if (localStorage.getItem("reload") === "0") {
    window.location.reload();
    localStorage.setItem("reload", "1");
  }

  // Affichages des patients + Formulaire de création de patient
  return (
    <Container>
      <FormWrap>
        <FormContent>
          <Formbis>
            <Titre>Mes Patients : <hr></hr></Titre>
            
            {posts.map((post) => (
              <p key={post.id}>
                Prénom: {post.firstname_pat} <br /> Nom: {post.lastname_pat}{" "}
                <br /> N°Sécurité Sociale: {post.security_number}
              </p>
            ))}
          </Formbis>
          <Form onSubmit={(e) => submit(e)}>
            <React.Fragment>
              <Typography variant="h6" gutterBottom>
                <h3>Fiche Patient</h3>
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    onChange={(e) => handle(e)}
                    id="security_number"
                    name="security_number"
                    label="Numéro de sécurité sociale"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    onChange={(e) => handle(e)}
                    id="first_consultation"
                    name="first_consultation"
                    type="date"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
              </Grid>
            </React.Fragment>
            {/* Gestion message d'erreur et validation */}
            <FormButton color="primary">Nouveaux patient</FormButton>
            {(() => {
              if (status === "400") {
                return (
                  <Typography style={{ color: "red" }}>
                    Votre patient n'a pas encore de compte utilisateur
                  </Typography>
                );
              }

              return null;
            })()}{" "}
            {(() => {
              if (status === "403") {
                return (
                  <Typography style={{ color: "red" }}>
                    Vous avez déjà enregistré ce patient
                  </Typography>
                );
              }

              return null;
            })()}{" "}
            {(() => {
              if (status === "201") {
                return (
                  <Alert severity="success" style={{ marginTop: "8%" }}>
                    Votre patient à été enregistré avec succèss!
                  </Alert>
                );
              }

              return null;
            })()}{" "}
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
}
export default Patient;
