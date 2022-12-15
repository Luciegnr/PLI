import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Axios from "axios";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import config from "../../Config/config";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Container, FormButton, LinkCss, Paper } from "./SignupElements";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "120vh",
  },
  image: {
    backgroundImage:
      "url(https://imgr.search.brave.com/oC1imesEWXmy-kA3_mBa19RVJcI72YPk0eehaKfnx_8/fit/626/626/no/1/aHR0cHM6Ly9pbWFn/ZS5mcmVlcGlrLmNv/bS92ZWN0ZXVycy1s/aWJyZS90aGVtZS1p/bGx1c3RyZS1tZWRl/Y2luLWxpZ25lXzIz/LTIxNDg1Mjg4MDcu/anBn)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));

// Fonction ajout du Copyright en dessous du formulaire
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Wivital
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Inscription(props: any) {
  const url = config.url.url_base;
  const classes = useStyles();
  const history = useHistory();
  const [data, setData] = useState({
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
  });
  const [err, setErr] = useState({
    error: "",
  });

  // Fonction pour recuperer en bdd les infos lors de validation du formulaire
  function submit(e: any) {
    e.preventDefault();
    Axios.post(url, {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      profession: data.profession,
      phone: data.phone,
      address: data.address,
      postal_code: data.postal_code,
      city: data.city,
      gender: data.gender,
      RPPS: data.RPPS,
    })
      .then((res) => {
        history.push(config.path.path_signin);
      })
      .catch((err) => {
        setErr(err);
      });
  }

    // Fonction pour enregistrer les strings des formulaires
  function handle(e: any) {
    const newData: any = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  // Gestion d'erreur
  const errMsg = err.error !== "" && (
    <span>{"Vous avez mal remplit une case"}</span>
  );

  // Affichage des éléments du formulaire + Image
  return (
    <Container>
      <Grid
        container
        component="main"
        onSubmit={(e: any) => submit(e)}
        className={classes.root}
      >
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Paper>
            {errMsg}
            <Typography variant="h6" gutterBottom>
              <h2>Inscription</h2>
            </Typography>
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={data.firstname}
                    id="firstname"
                    label="Prénom"
                    placeholder="Entrez votre Prénom"
                    name="firstname"
                    type="text"
                    autoComplete="firstname"
                    autoFocus
                    onChange={(e) => handle(e)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={data.lastname}
                    id="lastname"
                    label="Nom"
                    placeholder="Entrez votre Nom"
                    name="firstname"
                    type="text"
                    autoComplete="lastname"
                    autoFocus
                    onChange={(e) => handle(e)}
                  />
                </Grid>
              </Grid>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={data.email}
                id="email"
                label="Email"
                placeholder="Entrez votre Email"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => handle(e)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={data.password}
                name="password"
                label="Mot de passe"
                placeholder="Entrez un Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => handle(e)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={data.profession}
                id="profession"
                label="Profession"
                placeholder="Entrez votre Profession"
                name="profession"
                type="text"
                autoComplete="profession"
                autoFocus
                onChange={(e) => handle(e)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={data.phone}
                id="phone"
                label="N° de télephone"
                placeholder="Entrez votre N° de télephone"
                name="phone"
                type="number"
                autoComplete="phone"
                autoFocus
                onChange={(e) => handle(e)}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={data.address}
                id="address"
                label="Adresse"
                placeholder="Entrez votre Adresse"
                name="address"
                type="text"
                autoComplete="address"
                autoFocus
                onChange={(e) => handle(e)}
              />

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={data.postal_code}
                    id="postal_code"
                    label="Code Postal"
                    placeholder="Entrez votre Code Postal"
                    name="postal_code"
                    type="number"
                    autoComplete="postal_code"
                    autoFocus
                    onChange={(e) => handle(e)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={data.city}
                    id="city"
                    label="Ville"
                    placeholder="Entrez votre Ville"
                    name="city"
                    type="text"
                    autoComplete="city"
                    autoFocus
                    onChange={(e) => handle(e)}
                  />
                </Grid>
              </Grid>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={data.gender}
                id="gender"
                label="Sexe"
                placeholder="Entrez votre Sexe"
                name="gender"
                type="text"
                autoComplete="gender"
                autoFocus
                onChange={(e) => handle(e)}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={data.RPPS}
                id="RPPS"
                label="RPPS"
                placeholder="Entrez votre RPPS (11 Chiffres)"
                name="RPPS"
                type="number"
                autoComplete="RPPS"
                autoFocus
                onChange={(e) => handle(e)}
              />
              <FormButton color="primary">Inscription</FormButton>
              <Grid container>
                <Grid item>
                  <LinkCss to={config.path.path_signin}>
                    Déjà inscrit ? Connectez-vous !
                  </LinkCss>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Inscription;
