import React, { useState } from "react";
import Axios from "axios";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import config from "../../Config/config";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import {
  Container,
  FormButton,
  FormWrap,
  FormContent,
  Form,
} from "./ConsultationElements";

function Ordonnance(props: any) {
  localStorage.setItem("reload", "0");
  const getRPPS = localStorage.getItem("data_doc");
  const url = config.url.url_order + `${getRPPS}`;
  const [status, setStatus] = useState("");
  const history = useHistory();
  const [data, setData] = useState({
    fait_le: "",
    diagnostic: "",
    prescription: "",
    firstname_pat: "",
    lastname_pat: "",
    birthday: "",
    Status: "",
  });

  // Fonction pour recuperer en bdd les infos lors de validation du formulaire
  function submit(e: any) {
    e.preventDefault();
    Axios.post(url, {
      fait_le: data.fait_le,
      firstname_pat: data.firstname_pat,
      lastname_pat: data.lastname_pat,
      birthday: data.birthday,
      diagnostic: data.diagnostic,
      prescription: data.prescription,
    })
      .then((res) => {
        setStatus(String(res.status));

        setInterval(() => {
          history.push(config.path.path_profil);
        }, 2000);
      })
      .catch((err) => {
        setStatus(String(err.response.status));
      });
  }

  // Fonction pour enregistrer les strings des formulaires
  function handle(e: any) {
    const newData: any = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  // Affichage des éléments dans le formulaire
  return (
    <Container>
      <FormWrap>
        <FormContent>
          <Form onSubmit={(e) => submit(e)}>
            <React.Fragment>
              <Typography variant="h6" gutterBottom>
                <h2>Ordonnance</h2>
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    onChange={(e) => handle(e)}
                    id="fait_le"
                    value={data.fait_le}
                    placeholder="Date"
                    type="date"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    onChange={(e) => handle(e)}
                    id="lastname_pat"
                    value={data.lastname_pat}
                    label="Nom"
                    placeholder="Nom du patient"
                    type="text"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    onChange={(e) => handle(e)}
                    id="firstname_pat"
                    value={data.firstname_pat}
                    label="Prénom"
                    placeholder="Prénom du patient"
                    type="text"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    onChange={(e) => handle(e)}
                    id="birthday"
                    value={data.birthday}
                    label="Date de naissance"
                    placeholder="Date de naissance du patient"
                    type="text"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    onChange={(e) => handle(e)}
                    id="diagnostic"
                    value={data.diagnostic}
                    label="Diagnostic"
                    placeholder="Diagnostic du patient"
                    type="text"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    onChange={(e) => handle(e)}
                    id="prescription"
                    value={data.prescription}
                    label="Prescription"
                    placeholder="Prescription du patient"
                    type="text"
                  />
                </Grid>
              </Grid>
            </React.Fragment>
            <FormButton color="primary">Valider</FormButton>

            {/* Message d'erreur et de validation */}
            {(() => {
              if (status === "500") {
                return (
                  <Alert
                    severity="error"
                    style={{ marginTop: "8%", textAlign: "left" }}
                  >
                    <AlertTitle>Erreur</AlertTitle>
                    Vous n'avez pas encore enregistré ce patient <br></br>
                    <strong>Créez lui sa fiche patient !</strong>
                  </Alert>
                );
              }
              return null;
            })()}{" "}
            {(() => {
              if (status === "200") {
                return (
                  <Alert severity="success" style={{ marginTop: "8%" }}>
                    L'ordonnance a bien été créee !
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

export default Ordonnance;
