import React, { Component } from "react";
import config from "../../Config/config";
import "moment/locale/fr";
import { render } from "react-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Alert from "@material-ui/lab/Alert";
import Axios from "axios";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "react-modal";
import {
  Close,
  Container,
  FormButton,
  FormWrap,
  FormContent,
  Form,
  Button
} from "./RdvElements";

const localizer = momentLocalizer(moment);
const getRPPS = localStorage.getItem("data_doc");

class Rdv extends Component<any, any> {
  intervalID: any;

  constructor(props: any) {
    super(props);
    this.state = {
      firstname_pat: "",
      lastname_pat: "",
      phone_pat: "",
      date: "",
      label: "",
    };

    this.state = {
      name: "React",
      events: {},
      downlines: {},
      data: [],
      Source: [],

      date: "",
      label: "",
      height: 100,
      value: 1,
      modalVisible: false,
      visibility: false,
      status: "",
    };
  }

  // Fonction pour recuperer en bdd les infos lors de validation du formulaire
  onSubmit = (e: any) => {
    e.preventDefault();
    Axios.post(
      config.url.url_rdv + `${getRPPS}`,
      {
        firstname_pat: this.state.firstname_pat,
        lastname_pat: this.state.lastname_pat,
        phone_pat: this.state.phone_pat,
        date: this.state.date,
        label: this.state.label,
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
        this.setModalInVisible(!this.state.modalVisible);
      })
      .catch((err) => {
        this.setState({ status: String(err.response.status) });
      });
  };

  onChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Affichage des données des rdv (Nom Prénom du patien suivi + horaires)
  getData = () => {
    let url = config.url.url_rdv + `${getRPPS}`;
    var object = {};
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
        responseJson.forEach((rdv: any) => {
          var début = new Date(rdv.date);
          début.setHours(début.getHours() + 0);

          var minutesToAdd = 30;
          var fin = new Date(début.getTime() + minutesToAdd * 60000);

          object = {
            title: rdv.firstname_pat + " " + rdv.lastname_pat,
            start: début,
            end: fin,
          };
          if (rdv.date !== undefined) {
            this.state.data.push(object);
          }
        });
        this.setState({
          Source: this.state.data,
        });
      });
  };

   componentDidMount() {
    this.getData();
  }

  setModalVisible(visible: any) {
    this.setState({ modalVisible: visible });
    this.setState({ value: 2 });
  }

  setModalInVisible(visible: any) {
    this.setState({ modalVisible: visible });
    this.setState({ value: 1 });
  }

  render() {
    const customStyles = {
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0)",
      },
      content: {
        height: "85%",
        margin: 20,
        backgroundColor: "transparent",
        borderRadius: 0,
        border: "transparent",
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    };
    return (
      <div
        style={{
          marginTop: 100,
          marginBottom: 100,
          marginLeft: 150,
          marginRight: 150,
        }}
      >
        {(() => {
          if (this.state.value === 1) {
            return (
              // Boutton redirectionnelle vers la page formulaire pour prendre rdv
              <Button
                onClick={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                Ajouter un rdv
              </Button>
            );
          }
          return null;
        })()}{" "}
        <Modal style={customStyles} isOpen={this.state.modalVisible}>
          <div
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 22,
            }}
          >
            {/* Formulaire de création de rdv */}
            <Container>
              <FormWrap>
                <FormContent>
                  <Form>
                    <React.Fragment>
                      <Close
                        style={{ top: 60, marginRight: 30 }}
                        onClick={() => {
                          this.setModalInVisible(!this.state.modalVisible);
                        }}
                      >
                        &times;
                      </Close>
                      Prendre un RDV
                      <Typography variant="h6" gutterBottom></Typography>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <TextField
                            required
                            id="firstname_pat"
                            name="firstname_pat"
                            label="Prénom patient"
                            value={this.state.firstname_pat}
                            fullWidth
                            onChange={this.onChange}
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <TextField
                            required
                            id="lastname_pat"
                            type="lastname_pat"
                            name="lastname_pat"
                            label="Nom patient"
                            value={this.props.lastname_pat}
                            fullWidth
                            onChange={this.onChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            id="phone_pat"
                            type="phone_pat"
                            name="phone_pat"
                            label="Téléphone"
                            value={this.props.phone_pat}
                            fullWidth
                            onChange={this.onChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            id="date"
                            type="datetime-local"
                            name="date"
                            value={this.props.date}
                            fullWidth
                            onChange={this.onChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            id="label"
                            type="label"
                            name="label"
                            label="Raison"
                            value={this.props.label}
                            fullWidth
                            onChange={this.onChange}
                          />
                        </Grid>
                      </Grid>
                      <FormButton color="primary" onClick={this.onSubmit}>
                          Valider
                        </FormButton>
                    </React.Fragment>
                    {(() => {
                      if (this.state.status === "201") {
                        return (
                          <Alert
                            severity="info"
                            style={{ marginTop: "8%", textAlign: "left" }}
                          >
                            <AlertTitle>Info</AlertTitle>
                            Il s'agit d'un rendez-vous <br></br>
                            <strong>Avec un nouveau patient !</strong>
                          </Alert>
                        );
                      }
                      return null;
                    })()}{" "}
                    {/* Message de Validation */}
                    {(() => {
                      if (this.state.status === "200") {
                        return (
                          <Alert
                            severity="success"
                            style={{ marginTop: "8%", textAlign: "left" }}
                          >
                            <AlertTitle>Confirmation</AlertTitle>
                            <strong>
                              Votre rendez-vous à bien été enregistré !
                            </strong>
                          </Alert>
                        );
                      }
                      return null;
                    })()}{" "}
                  </Form>
                </FormContent>
              </FormWrap>
            </Container>
          </div>
        </Modal>
        {/* Affichage du calendrier */}
        {(() => {
          if (this.state.value === 1) {
            return (
              <div style={{ height: "500pt",  marginTop: "1%",}}>
                <Calendar
                  events={this.state.Source}
                  titleAccessor="title"
                  startAccessor="start"
                  endAccessor="end"
                  defaultDate={moment().toDate()}
                  localizer={localizer}
                  messages={{
                    next: "Suivant",
                    previous: "Précédent",
                    today: "Aujourd'hui",
                    month: "Mois",
                    week: "Semaine",
                    day: "Jour",
                  }}
                />
              </div>
            );
          }
          return null;
        })()}{" "}
      </div>
    );
  }
}

render(<Rdv />, document.getElementById("root"));
export default Rdv;
