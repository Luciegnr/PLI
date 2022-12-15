import React, { Component } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text, TextInput } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import conf from "../../../conf";
import styles from "../../../styles/Paramètre/style";

// Déclaration de la navigation ainsi que des variables nécessaires à la requête pour modifier ses informations.
type MyState = { navigation: any; sécu: any; route: any };
type MyProps = {
  isLoading: boolean;
  requestFailed: boolean;
  firstname;
  lastname;
  password;
  email;
  phone;
  address;
  postal_code;
  city;

  downlines;
};
//Création du formulaire pour modifier les infos personnelles
export default class Paramètre extends Component<MyState, MyProps> {
  intervalID;
  constructor(props) {
    super(props);
    this.state = {
      requestFailed: false,
      isLoading: false,
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      postal_code: "",
      password: "",
      city: "",

      downlines: {},
    };
  }

  // Fonction permettant d'envoyer les informations saisies par l'utilisateur pour modifier son profil.
  submitProfil() {
    let url = conf.url.url_user + `${this.props.route.params.sécu}`;
    let data = this.state;

    fetch(url, {
      method: "PUT",
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
        this.props.navigation.navigate("MyTabs", {
          sécu: this.props.route.params.sécu,
        });
      });
  }

  render() {
    const { navigation } = this.props;

    return (
      <>
        <ScrollView style={{ backgroundColor: "white" }}>
          <View style={styles.centeredView}>
            <View style={styles.View}>
              <View style={styles.Space}>
                <View style={{ alignItems: "flex-end" }}>
                  <FontAwesome5
                    name="times"
                    color="grey"
                    size={35}
                    onPress={() => {
                      navigation.navigate("MyTabs", {
                        sécu: this.props.route.params.sécu,
                      });
                    }}
                  />
                </View>
                <Text style={styles.titre}>Modifier mes infos</Text>
                <View
                  style={{ backgroundColor: "#FFF", height: "100%", flex: 1 }}
                >
                  <ScrollView>
                    <View style={{ height: "100%", top: "0%" }}>
                      <View style={{ height: "73%", top: "0%" }}>
                        <TextInput
                          placeholder={"Nom"}
                          placeholderTextColor={"grey"}
                          onChangeText={(text) => {
                            this.setState({ lastname: text });
                          }}
                          style={styles.textInput2}
                        />
                        <TextInput
                          placeholder={"Prénom"}
                          placeholderTextColor={"grey"}
                          onChangeText={(text) => {
                            this.setState({ firstname: text });
                          }}
                          style={styles.textInput2}
                        />
                        <TextInput
                          placeholder={"Adresse email"}
                          placeholderTextColor={"grey"}
                          onChangeText={(text) => {
                            this.setState({ email: text });
                          }}
                          style={styles.textInput2}
                        />
                        <TextInput
                          placeholder={"Mot de passe"}
                          placeholderTextColor={"grey"}
                          onChangeText={(text) => {
                            this.setState({ password: text });
                          }}
                          style={styles.textInput2}
                        />
                        <TextInput
                          placeholder={"Téléphone"}
                          placeholderTextColor={"grey"}
                          onChangeText={(text) => {
                            this.setState({ phone: text });
                          }}
                          style={styles.textInput2}
                        />
                        <TextInput
                          placeholder={"Code Postal"}
                          placeholderTextColor={"grey"}
                          onChangeText={(text) => {
                            this.setState({ postal_code: text });
                          }}
                          style={styles.textInput2}
                        />
                        <TextInput
                          placeholder={"Ville"}
                          placeholderTextColor={"grey"}
                          onChangeText={(text) => {
                            this.setState({ city: text });
                          }}
                          style={styles.textInput2}
                        />

                        <TouchableOpacity
                          style={styles.button1}
                          onPress={() => {
                            this.submitProfil();
                          }}
                        >
                          <Text
                            style={{
                              textAlign: "center",
                              color: "#fff",
                              fontSize: 20,
                            }}
                          >
                            Modifier
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}
