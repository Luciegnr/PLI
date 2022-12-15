import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';
import Axios from 'axios'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom'
import config from "../../Config/config"
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  FormButton,
  LinkCss,
  Paper
} from './SigninElements';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '80vh',
  },
  image: {
    backgroundImage: 'url(https://imgr.search.brave.com/7ENu12dT5gL4zSJZ2lWio4gkXjvwi13597MA0TzZ--Q/fit/626/626/no/1/aHR0cHM6Ly9pbWFn/ZS5mcmVlcGlrLmNv/bS92ZWN0ZXVycy1s/aWJyZS9jb25jZXB0/LW1lZGVjaW4tbGln/bmVfMjMtMjE0ODUw/ODM3My5qcGc)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
}));

// Fonction ajout du Copyright en dessous du formulaire
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Wivital
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Log(props: any) {
  const url = config.url.url_login;
  const history = useHistory();
  const classes = useStyles();
  const [data, setLoginData] = useState({
    email: '',
    password: ''
  })
  const [err, setErr] = useState({
    error: '',
  })

  // Fonction pour recuperer en bdd les infos lors de validation du formulaire
  function submit(e: any) {
    e.preventDefault()
    Axios.post(url, {
      email: data.email,
      password: data.password
    })
      .then(res => {
        localStorage.setItem('reload', "0");
        localStorage.setItem('data_doc', res.data.RPPS);
        localStorage.setItem('user_auth', "true");
        history.push(config.path.path_profil)
      })
      .catch(err => {
        setErr(err)
        setLoginData({ ...data })
      })
  }

    // Fonction pour enregistrer les strings des formulaires
  function handle(e: any) {
    const newData:any = { ...data }
    newData[e.target.id] = e.target.value
    setLoginData(newData)
  }

  // Gestion Erreur
  const errMsg = err.error !== '' && <span>{"Email ou Mot de passe incorrecte"}</span>

    // Affichage des éléments du formulaire + Image

  return (
    <Container>
      <Grid container component="main" onSubmit={(e: any) => submit(e)} className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          {errMsg}
          <Paper>
            <Typography variant="h6" gutterBottom>
              <h2>Connexion</h2>
            </Typography>
            <form>
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
                placeholder="Entrez votre Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => handle(e)}
              />
              
              <FormButton color="primary">
                Connexion
              </FormButton>
              <Grid container>
                <Grid item>
                  <LinkCss to={config.path.path_signup}>
                    Pas de compte ? Inscrivez-vous !
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
export default Log;
