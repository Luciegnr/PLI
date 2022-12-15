import React, { Component } from "react";
import { IconButton } from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";
import StepIndicator from "react-native-step-indicator";
import styles from "../../../styles/Auth/style";

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
};
// Création de la deuxième page du formulaire d'inscription
export default class Register2 extends Component<MyState, MyProps> {
  //Déclaration des variables des champs de ce formulaire ainsi que les champs récupérés de la première page.
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.route.params.email,
      password: this.props.route.params.password,
      security_number: this.props.route.params.security_number,
      firstname: "",
      lastname: "",
      gender: "",
      birthday: "",
      ErrorInfo: "",
    };
  }

  // Fonction permettant d'envoyer les informations saisies par l'utilisateur à la dernière page du formulaire, dans le cas où les champs seraient
  // vides une phrase d'erreur est retournée, si tous les champs sont saisis l'utilisateur page à la page suivante.
  send() {
    if (
      this.state.firstname.trim() === "" ||
      this.state.lastname.trim() === "" ||
      this.state.gender.trim() === "" ||
      this.state.birthday.trim() === ""
    ) {
      this.setState(() => ({
        ErrorInfo: "Veuillez saisir toutes les informations.",
      }));
    } else {
      this.setState(() => ({ ErrorInfo: null }));
      this.props.navigation.navigate("RegisterPat3", {
        email: this.state.email,
        password: this.state.password,
        security_number: this.state.security_number,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        gender: this.state.gender,
        birthday: this.state.birthday,
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
              navigation.navigate("RegisterPat");
            }}
          />
          <View style={styles.style.viewText}>
            <TextInput
              style={styles.style.prénom}
              placeholder={"Prénom"}
              placeholderTextColor={"grey"}
              onChangeText={(text) => {
                this.setState({ firstname: text });
              }}
            />
            <TextInput
              style={styles.style.nom}
              placeholder={"Nom"}
              onChangeText={(text) => {
                this.setState({ lastname: text });
              }}
            />
          </View>

          <View style={styles.style.sexe}>
            <RNPickerSelect
              placeholder={styles.placeholder}
              items={styles.sexe}
              onValueChange={(value) => {
                this.setState({
                  gender: value,
                });
              }}
              style={{
                ...styles.pickerSelectStyles,
                iconContainer: {
                  top: 10,
                  right: 12,
                },
              }}
              useNativeAndroidPickerStyle={false}
            />

            <TextInput
              style={styles.style.anniversaire}
              placeholder={"Date de naissance"}
              onChangeText={(text) => {
                this.setState({ birthday: text });
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
            onPress={() => this.send()}
          >
            <Text style={styles.style.nextButton}>Suivant</Text>
          </TouchableOpacity>

          <StepIndicator
            customStyles={styles.customStyles}
            currentPosition={1}
            stepCount={3}
            labels={styles.labels}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
