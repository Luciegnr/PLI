import React, { Component } from "react";
import Axios from "axios";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import config from "../../Config/config";
import {
  FormWrap,
  FormContent,
  Form,
  Form2,
  Pop,
  Container,
  FormButton,
  FormWrap2,
  FormContent2,
  H3,
  Formbis,
} from "./ProfilElements";

const getRPPS = localStorage.getItem("data_doc");

class Prof extends Component<any, any> {
  intervalID: any;
  constructor(props: any) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      profession: "",
      phone: "",
      address: "",
      postal_code: "",
      city: "",
      data: {},
    };
  }

// Fonction pour modifier les infos lors de validation du formulaire
  onSubmit = (e: any) => {
    e.preventDefault();
    Axios.put(
      config.url.url_base + `${getRPPS}`,
      {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
        profession: this.state.profession,

        phone: this.state.phone,
        address: this.state.address,
        postal_code: this.state.postal_code,
        city: this.state.city,
      },
      {
        headers: {
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Site": "cross-site",
        },
      }
    )
      .then((res) => {
        this.setState({ status: String(res.status) });
      })
      .catch((err) => {
        this.setState({ status: String(err.response.status) });
      });
  };

  onChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

// Récupération en GET des infos à afficher
  getData = () => {
    let url = config.url.url_base + `${getRPPS}`;
    let status;
    fetch(url, status)
      .then((response) => {
        if (!response.ok) {
          status = response.status;
        } else {
          status = response.status;
          return response.json();
        }
      })
      .then((responseJson) => {
        this.setState({ data: responseJson });
      });
    this.intervalID = setTimeout(this.getData.bind(this), 1000);
  };

  componentDidMount() {
    this.getData();
  }

  // Affichage des informations du médecin + cabinet
  render() {
    return (
      <Container>
        <FormWrap>
          <FormContent>
            <Form>
              <H3>Mes informations</H3>
              <hr></hr>
              <Pop>
                Prénom : {}
                {this.state.data.firstname}
              </Pop>
              <Pop>
                Nom : {}
                {this.state.data.lastname}
              </Pop>
              <Pop>
                Genre : {}
                {this.state.data.gender}
              </Pop>
              <Pop>
                Profession : {}
                {this.state.data.profession}
              </Pop>
              <Pop>
                RPPS : {}
                {this.state.data.RPPS}
              </Pop>
              <Pop>
                Email : {}
                {this.state.data.email}
              </Pop>
              <Pop>
                N° Téléphone : {}
                {this.state.data.phone}
              </Pop>
            </Form>
            <Form2>
              <H3>Mon Cabinet</H3>
              <hr></hr>
              <Pop>
                Adresse : {}
                {this.state.data.address}
              </Pop>
              <Pop>
                Code Postal : {}
                {this.state.data.postal_code}
              </Pop>
              <Pop>
                Ville : {}
                {this.state.data.city}
              </Pop>
            </Form2>
          </FormContent>
        </FormWrap>
        {/* Formulaire de modifiation d'informations */}
        <FormWrap2>
          <FormContent2>
            <Formbis>
              <React.Fragment>
                <Typography variant="h6" gutterBottom>
                  <h2>Changer mes informations</h2>
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="firstname"
                      type="text"
                      name="firstname"
                      label="Prénom"
                      value={this.props.firstname}
                      fullWidth
                      onChange={this.onChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="lastname"
                      type="text"
                      name="lastname"
                      label="Nom"
                      value={this.props.lastname}
                      fullWidth
                      onChange={this.onChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="email"
                      type="text"
                      name="email"
                      label="Email"
                      value={this.props.email}
                      fullWidth
                      onChange={this.onChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="password"
                      type="text"
                      name="password"
                      label="Mot de passe"
                      value={this.props.password}
                      fullWidth
                      onChange={this.onChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="profession"
                      type="text"
                      name="profession"
                      label="Profession"
                      value={this.props.profession}
                      fullWidth
                      onChange={this.onChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="phone"
                      type="text"
                      name="phone"
                      label="Téléphone"
                      value={this.props.phone}
                      fullWidth
                      onChange={this.onChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="postal_code"
                      type="text"
                      name="postal_code"
                      label="Code postal"
                      value={this.props.postal_code}
                      fullWidth
                      onChange={this.onChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="city"
                      type="text"
                      name="city"
                      label="Ville"
                      value={this.props.city}
                      fullWidth
                      onChange={this.onChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="address"
                      type="text"
                      name="address"
                      label="Adresse"
                      value={this.props.address}
                      fullWidth
                      onChange={this.onChange}
                    />
                  </Grid>
                </Grid>
              </React.Fragment>
              <FormButton color="primary" onClick={this.onSubmit}>
                Valider
              </FormButton>
            </Formbis>
          </FormContent2>
        </FormWrap2>
      </Container>
    );
  }
}
export default Prof;
