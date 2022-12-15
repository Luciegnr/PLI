import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import styles from "../../../styles/Planning/style";
import { Modal } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { isToday } from "react-native-big-calendar";
import { Agenda } from "react-native-calendars";
import urlconf from "../../../conf";
import conf from "./conf";
import theme from "./theme";
import moment from "moment";
import {
  Text,
  View,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
} from "react-native";
conf;

// Déclaration de la navigation ainsi que des variables nécessaires à la création d'un rendez-vous.
type MyState = { navigation: any; sécu: any; route: any };
type MyProps = {
  modalVisible: boolean;
  visibility: boolean;
  isLoading: boolean;
  requestFailed: boolean;
  Source;
  downlines;
  label;
  date;
  lastname_doc;
  firstname_doc;
  city_doc;
};

//Création de la page du planning (une partie calendrier avec tous les rdv de l'utilisateur et un formulaire pour créer de nouveaux rdvs)
export default class Planning extends React.Component<MyState, MyProps> {
  intervalID;

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      visibility: false,
      isLoading: false,
      requestFailed: false,
      Source: {},
      downlines: {},
      label: "",
      date: "",
      lastname_doc: "",
      firstname_doc: "",
      city_doc: "",
    };
  }
  // A la confirmation du datetimepicker en enregistre l'heure et la date dans la variable qui sera envoyée à l'api
  handleConfirm = (date) => {
    this.setState({ date: date });
    this.setState({ visibility: false });
    this.setState({ date: date });
  };

  // Fonction permettant d'envoyer les informations saisies par l'utilisateur pour créer un nouveau rendez-vous, Une fois le formulaire validé
  // la page se ferme et le calendrier apparait avec le nouveau rendez vous.
  submit() {
    let url = urlconf.url.url_Rdv + this.props.route.params.sécu;
    let data = this.state;

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
        } else return response.json();
      })
      .then((responseJson) => {
        this.setState({ isLoading: false, downlines: responseJson.response });
        this.setModalVisible(!this.state.modalVisible);
      });
  }
  // fonction permettant de fermer le datepicker pour créer un rendez vous
  OnPressCancel = () => {
    this.setState({ visibility: false });
  };
  // fonction permettant d'ouvrir le datepicker pour créer un rendez vous
  OnPressButton = () => {
    this.setState({ visibility: true });
  };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  // Fonction permettant de récupérer les données de l'api, ici nous récupérons tous les rdvs de notre utilisateur. Et pour les afficher correctement dans le calendrier
  // nous les appelons sous une certaine forme de json
  getData = () => {
    let url = urlconf.url.url_Rdv + this.props.route.params.sécu;
    let status;
    var data = {};
    let time;
    let month;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          status = response.status;
        } else {
          status = response.status;
          return response.json();
        }
      })
      .then((responseJson) => {
        responseJson.forEach((rdv) => {
          var début = new Date(rdv.date);
          début.setHours(début.getHours() + 2);

          var year = début.getFullYear();
          month = début.getMonth() + 1;
          time = début.getDate();

          if (time < 10) {
            time = "0" + time;
          }
          if (month < 10) {
            month = "0" + month;
          }
          var convert = year + "-" + month + "-" + time;
          var label = rdv.label;
          var height = rdv.height;
          var lastname_doc = rdv.lastname_doc;
          var firstname_doc = rdv.firstname_doc;
          var city_doc = rdv.city_doc;
          var object = {
            name: label,
            height: height,
            date: début,
            lastname_doc: lastname_doc,
            firstname_doc: firstname_doc,
            city_doc: city_doc,
          };

          if (data[convert] === undefined) data[convert] = [];
          data[convert].push(object);
        });
        this.setState({
          Source: data,
        });
      });
    this.intervalID = setTimeout(this.getData.bind(this), 2000);
  };

  //Nous appelons notre fonction permettant de récupérer les données a chaque fois que la page est chargé et les données sont mise à jour toutes les 2 sec
  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  // Nous définissons l'affichage de nos créneaux de rendez vous (nous avons choisi de formuler des phrases en fonction de quel type de rendez vous il s'agit)
  // l'affichage est différentssi il s'agit d'un rendez vous avec un docteur, si il s'afit d'un rendez vous avec uniquement le lieu du rendez vous ou si il n'y
  // a que une description (comme le rappel d'une prise de médicament)
  renderItem = (item) => {
    let heure = moment.utc(item.date).format("HH");
    let min = moment.utc(item.date).format("mm");

    if (
      item.lastname_doc == undefined &&
      item.firstname_doc == undefined &&
      item.city_doc == undefined
    ) {
      return (
        <TouchableOpacity style={[styles.item, { height: item.height }]}>
          <Text>{item.name}</Text>
          <Text
            style={{
              textAlign: "right",
              justifyContent: "flex-end",
              bottom: "-25%",
            }}
          >
            À {heure}:{min}
          </Text>
        </TouchableOpacity>
      );
    } else if (
      item.city_doc != undefined &&
      item.lastname_doc == undefined &&
      item.firstname_doc == undefined
    ) {
      return (
        <TouchableOpacity style={[styles.item, { height: item.height }]}>
          <Text>{item.name}</Text>
          <Text
            style={{
              textAlign: "right",
              justifyContent: "flex-end",
              bottom: "-25%",
            }}
          >
            À {item.city_doc}, {heure}:{min}
          </Text>
        </TouchableOpacity>
      );
    } else if (
      item.lastname_doc != undefined &&
      item.city_doc != undefined &&
      item.firstname_doc != undefined
    ) {
      return (
        <TouchableOpacity style={[styles.item, { height: item.height }]}>
          <Text>{item.name}</Text>
          <Text>
            Avec le Dr. {item.lastname_doc} {item.firstname_doc}
          </Text>
          <Text
            style={{
              textAlign: "right",
              justifyContent: "flex-end",
              bottom: "-25%",
            }}
          >
            À {item.city_doc}, {heure}:{min}
          </Text>
        </TouchableOpacity>
      );
    }
  };

  rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  };
  // Ici nous gérons donc l'affichage du calendrier ainsi que la gestion permettant ou non d'afficher la page de formulaire.
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        {/* Ici il s'agit du formulaire pour créer un rendez vous avec les champs
        de saisies */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.Space}>
                <View
                  style={{ alignItems: "flex-end", left: "30%", top: "-10%" }}
                >
                  <FontAwesome5
                    name="times"
                    color="grey"
                    size={35}
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                  />
                </View>

                <Text style={styles.modalText}>Ajouter un rappel</Text>
                <View style={styles.viewInput}>
                  <TextInput
                    secureTextEntry={true}
                    clearButtonMode="always"
                    placeholder={"Nom docteur"}
                    placeholderTextColor={"grey"}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(text) => {
                      this.setState({ lastname_doc: text });
                    }}
                    style={styles.textInputDoc}
                  />
                  <TextInput
                    secureTextEntry={true}
                    clearButtonMode="always"
                    placeholder={"Prénom docteur"}
                    placeholderTextColor={"grey"}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(text) => {
                      this.setState({ firstname_doc: text });
                    }}
                    style={styles.textInputDoc}
                  />
                  <TextInput
                    secureTextEntry={true}
                    clearButtonMode="always"
                    placeholder={"Localisation"}
                    placeholderTextColor={"grey"}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(text) => {
                      this.setState({ city_doc: text });
                    }}
                    style={styles.textInputDoc}
                  />
                </View>
                <View style={styles.viewAdd}>
                  <TextInput
                    secureTextEntry={true}
                    clearButtonMode="always"
                    placeholder={"Description"}
                    placeholderTextColor={"grey"}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(text) => {
                      this.setState({ label: text });
                    }}
                    style={styles.textInput}
                  />
                  <FontAwesome5
                    name="calendar-alt"
                    color="grey"
                    size={35}
                    onPress={this.OnPressButton}
                  />

                  <DateTimePickerModal
                    isVisible={this.state.visibility}
                    onConfirm={this.handleConfirm}
                    is24Hour
                    date={new Date()}
                    headerTextIOS="Choisissez une date"
                    confirmTextIOS="Confirmer"
                    cancelTextIOS="Annuler"
                    onCancel={this.submit}
                    locale="fr-FR"
                    mode="datetime"
                  />
                </View>

                <TouchableHighlight
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    this.submit();
                  }}
                >
                  <Text style={styles.textStyle}>Enregistrer</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
        {/* Ici nous gérons l'affichage du calendrier ainsi que du bouton
        permettant d'afficher le formulaire */}
        <View style={styles.viewCalendar}>
          <FontAwesome5
            style={{
              marginLeft: "85%",
            }}
            name="plus"
            color="grey"
            size={35}
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
          />
          <Agenda
            items={this.state.Source}
            selected={isToday}
            renderItem={this.renderItem.bind(this)}
            renderEmptyData={() => {
              return <View></View>;
            }}
            theme={theme.theme}
            rowHasChanged={this.rowHasChanged.bind(this)}
          />
          <View style={{ marginBottom: "20%" }}></View>
        </View>
      </View>
    );
  }
}
