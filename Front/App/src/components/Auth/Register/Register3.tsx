import React, { Component } from "react";
import styles from "../../../styles/Auth/style";
import conf from "../../../conf";
import { IconButton } from "react-native-paper";
import StepIndicator from "react-native-step-indicator";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
// Déclaration de la navigation ainsi que des variables nécessaires à la requête pour créer son compte.
type MyState = { navigation: any; route: any };
type MyProps = {
  firstname;
  lastname;
  gender;
  birthday;
  ErrorInfo;
  email;
  password;
  security_number;
  address;
  postal_code;
  phone;
  city;
  isLoading;
  downlines;
};
export default class Register3 extends Component<MyState, MyProps> {
    //Déclaration des variables des champs de ce formulaire ainsi que les champs récupérés des premières pages.
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.route.params.email,
      password: this.props.route.params.password,
      firstname: this.props.route.params.firstname,
      lastname: this.props.route.params.lastname,
      gender: this.props.route.params.gender,
      birthday: this.props.route.params.birthday,
      security_number: this.props.route.params.security_number,
      address: "",
      postal_code: "",
      phone: "",
      city: "",
      ErrorInfo: "",
      isLoading: false,
      downlines: {},
    };
  }


  // Fonction permettant d'envoyer les informations saisies par l'utilisateur à la base de données, dans le cas où les champs seraient
  // vides une phrase d'erreur est retournée, si tous les champs sont saisis l'utilisateur accède maintenant a une page de validation puis au formulaire de fiche d'urgence.
  submit() {
    let url = conf.url.url_user;
    let data = this.state;
    if (
      this.state.address.trim() === "" ||
      this.state.postal_code.trim() === "" ||
      this.state.phone.trim() === "" ||
      this.state.city.trim() === ""
    ) {
      this.setState(() => ({
        ErrorInfo: "Veuillez saisir toutes les informations.",
      }));
    } else {
      this.setState(() => ({ ErrorInfo: null }));
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) throw new Error("status code " + response.status);
          else return response.json();
        })
        .then((data) => {
          this.setState({ isLoading: false, downlines: data.response });
          this.props.navigation.navigate("SuccessPat", {
            security_number: this.state.security_number,
          });
        });
    }
  }

  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.style.container}>
        <ScrollView>
          <Image
            source={require("../../../../assets/illustrations/login.png")}
            style={styles.style.img}
          />
          <IconButton
            icon="arrow-left"
            color="#6fcf97"
            size={25}
            onPress={() => {
              navigation.navigate("RegisterPat2");
            }}
          />
          <View style={styles.style.viewText}>
            <TextInput
              style={styles.style.adresse}
              placeholder={"Adresse"}
              placeholderTextColor={"grey"}
              onChangeText={(text) => {
                this.setState({ address: text });
              }}
            />
            <TextInput
              style={styles.style.ville}
              placeholder={"Ville"}
              onChangeText={(text) => {
                this.setState({ city: text });
              }}
            />
          </View>

          <View style={styles.style.InputRow}>
            <TextInput
              style={styles.style.téléphone}
              placeholder={"Téléphone"}
              onChangeText={(text) => {
                this.setState({ phone: text });
              }}
            />

            <TextInput
              style={styles.style.postal}
              placeholder={"C. Postal"}
              onChangeText={(text) => {
                this.setState({ postal_code: text });
              }}
            />
          </View>
          {!!this.state.ErrorInfo && (
            <Text style={{ color: "red", textAlign: "center" }}>
              {this.state.ErrorInfo}
            </Text>
          )}
          <TouchableOpacity
            style={styles.style.NextRegister}
            onPress={() => {
              this.submit();
            }}
          >
            <Text style={styles.style.nextButton}>Suivant</Text>
          </TouchableOpacity>

          <StepIndicator
            customStyles={styles.customStyles}
            currentPosition={3}
            stepCount={3}
            labels={styles.labels}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
