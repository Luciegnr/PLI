import React, { Component } from "react";
import { IconButton } from "react-native-paper";
import styles from "../../../styles/Auth/style";
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
type MyState = { navigation: any };
type MyProps = {
  email;
  password;
  security_number;
  ErrorInfo;
  number;
  deux;
  un;
  no;
};
// Création de la première page du formulaire d'inscription
export default class Register extends Component<MyState, MyProps> {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      security_number: "",
      ErrorInfo: "",
      number: "",
      deux: "",
      un: "",
      no: 1,
    };
  }
  // Fonction permettant d'envoyer les informations saisies par l'utilisateur à la dernière page du formulaire, dans le cas où les champs seraient
  // vides une phrase d'erreur est retournée, si tous les champs sont saisis l'utilisateur page à la oage suivante.
  send() {
    if (
      this.state.email.trim() === "" ||
      this.state.password.trim() === "" ||
      this.state.security_number.trim() === "" ||
      this.state.no.trim() === 0
    ) {
      this.setState(() => ({
        ErrorInfo: "Veuillez saisir toutes les informations.",
      }));
    } else {
      this.setState(() => ({ ErrorInfo: null }));
      this.props.navigation.navigate("RegisterPat2", {
        email: this.state.email,
        password: this.state.password,
        security_number: this.state.security_number,
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
              navigation.navigate("ChoicePat");
            }}
          />
          <View style={styles.style.viewText}>
            <TextInput
              style={styles.style.email}
              placeholder={"Email"}
              placeholderTextColor={"grey"}
              onChangeText={(text) => {
                this.setState({ email: text });
              }}
            />
            <TextInput
              style={styles.style.password}
              placeholder={"Mot de passe"}
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({ password: text });
              }}
            />

            <TextInput
              style={styles.style.sécu}
              maxLength={15}
              keyboardType="numeric"
              placeholder={"Numéro de sécurité (15)"}
              onChangeText={(text) => {
                let newText = "";
                let numbers = "0123456789";

                for (var i = 0; i < text.length; i++) {
                  if (numbers.indexOf(text[i]) > -1) {
                    newText = newText + text[i];
                    this.setState({ security_number: text });
                  } else {
                    // your call back function
                    this.setState(() => ({
                      number: "Le numéro doit commencer par 1 ou 2 et uniquement des chiffres.",
                    }));
                    this.setState({ no: 0 });
                  }
                }
                if (text.charAt(0) !== "2") {
                  this.setState(() => ({
                    number: "Le numéro doit commencer par 1 ou 2 et uniquement des chiffres.",
                  }));
                  this.setState({ no: 0 });
                } else {
                  this.setState({ security_number: text });
                }

                if (text.charAt(0) !== "1") {
                  this.setState(() => ({
                    number: "Le numéro doit commencer par 1 ou 2 et uniquement des chiffres.",
                  }));
                  this.setState({ no: 0 });
                } else {
                  this.setState({ security_number: text });
                }
              }}
            />
         
            {!!this.state.number && (
              <Text style={{ color: "red", textAlign: "center" }}>
                {this.state.number}
              </Text>
            )}
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
            currentPosition={0}
            stepCount={3}
            labels={styles.labels}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
