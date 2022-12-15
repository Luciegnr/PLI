import React, { Component } from "react";
import { TextInput } from "react-native";
import { IconButton } from "react-native-paper";
import styles from "../../styles/Auth/style";
import conf from "../../conf";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

// Déclaration de la navigation ainsi que des variables nécessaires à la requête pour s'authentifier.
type MyState = { navigation: any };
type MyProps = {
  email;
  password;
  ErrorEmail;
  ErrorPassword;
  ErrorStatus;
  isLoading;
  downlines;
  requestFailed;
};
//Création de la page de connexion (saisie du mot de passe et de l'adresse email"
export default class Login extends Component<MyState, MyProps> {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      ErrorEmail: "",
      ErrorPassword: "",
      ErrorStatus: "",
      isLoading: false,
      requestFailed: false,
      downlines: {},
    };
  }

  // Fonction permettant d'envoyer les informations saisies par l'utilisateur pour se connecter, dans le cas où les champs seraient
  // vides une phrase d'erreur est retournée, si la requête échoue un message est aussi retourné dans le cas où l'utilisateur est
  // bien identifié il est redirigé sur sa page d'accueil.
  submit() {
    let url = conf.url.url_login;
    let data = this.state;
    if (this.state.email.trim() === "") {
      this.setState(() => ({
        ErrorEmail: "Entrez votre adresse email.",
      }));
    } else {
      this.setState(() => ({ ErrorEmail: null }));
    }
    if (this.state.password.trim() === "") {
      this.setState(() => ({
        ErrorPassword: "Mot de passe obligatoire.",
      }));
    } else {
      this.setState(() => ({ ErrorPassword: null }));
    }
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
          if (
            this.state.password.trim() !== "" &&
            this.state.email.trim() !== ""
          ) {
            this.setState(() => ({
              ErrorStatus: "Email ou mot de passe incorect",
            }));
          }
        } else {
          this.setState(() => ({ ErrorStatus: null }));
          return response.json();
        }
      })
      .then((responseJson) => {
        this.setState({ isLoading: false, downlines: responseJson.response });
        const num_sécu = responseJson.user.security_number;
        this.props.navigation.navigate("MyTabs", { sécu: num_sécu });
      });
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ backgroundColor: "#FFF", height: "100%", flex: 1 }}>
        <ScrollView>
          <View style={{ height: "100%", top: "0%" }}>
            <View style={{ top: 60 }}>
              <IconButton
                icon="arrow-left"
                color="#6fcf97"
                size={25}
                onPress={() => {
                  navigation.navigate("ChoicePat");
                }}
              />
              <Text style={styles.style.titre}>Wivital</Text>

              <TextInput
                clearButtonMode="always"
                placeholder={"Adresse email"}
                placeholderTextColor={"grey"}
                onChangeText={(text) => {
                  this.setState({ email: text });
                }}
                style={styles.style.InputMail}
              />
              {!!this.state.ErrorEmail && (
                <Text style={styles.style.erreur}>{this.state.ErrorEmail}</Text>
              )}
              <TextInput
                secureTextEntry={true}
                clearButtonMode="always"
                placeholder={"Mot de passe"}
                placeholderTextColor={"grey"}
                onChangeText={(text) => {
                  this.setState({ password: text });
                }}
                style={styles.style.InputPassword}
              />
              {!!this.state.ErrorPassword && (
                <Text style={styles.style.erreur}>
                  {this.state.ErrorPassword}
                </Text>
              )}

              {!!this.state.ErrorStatus && (
                <Text style={styles.style.erreur}>
                  {this.state.ErrorStatus}
                </Text>
              )}
              <TouchableOpacity
                style={styles.style.ConnexionLogin}
                onPress={() => {
                  this.submit();
                }}
              >
                <Text style={styles.style.nextButton}>Connexion</Text>
              </TouchableOpacity>

              <Text style={styles.style.Text}>
                Vous n'avez pas de compte,{" "}
                <Text
                  style={styles.style.TextButton}
                  onPress={() => {
                    navigation.navigate("RegisterPat");
                  }}
                >
                  créez le !
                </Text>
              </Text>
            </View>

            <Image
              source={require("../../../assets/illustrations/login.png")}
              style={styles.style.imgLogin}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
