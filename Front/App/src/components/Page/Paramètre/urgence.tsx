import React, { Component } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text, TextInput } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import conf from "../../../conf";
import styles from "../../../styles/Paramètre/style";

// Déclaration de la navigation ainsi que des variables nécessaires à la requête pour modifier ses informations.
type MyState = { navigation: any; sécu: any; route: any };
type MyProps = {
  isLoading;

  allergy;
  Organ_Donor;
  Urgence_Name;
  Urgence_Phone;

  downlines;
};

//Création du formulaire pour modifier les infos personnelles
export default class Paramètre extends Component<MyState, MyProps> {
  intervalID;
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,

      allergy: "",
      Organ_Donor: "",
      Urgence_Name: "",
      Urgence_Phone: "",
      downlines: {},
    };
  }
  // Fonction permettant d'envoyer les informations saisies par l'utilisateur pour modifier sa fiche urgence.
  submitUrgence() {
    let url = conf.url.url_Put_Urgence + `${this.props.route.params.sécu}`;
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
            <View style={styles.modalView}>
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
                <Text
                  style={{
                    fontSize: 35,
                    textAlign: "center",
                    marginTop: 10,
                    marginBottom: 15,
                    color: "black",
                    shadowColor: "white",
                    fontWeight: "400",
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.5,
                  }}
                >
                  Modifier mes Urgence
                </Text>
                <View
                  style={{ backgroundColor: "#FFF", height: "100%", flex: 1 }}
                >
                  <ScrollView>
                    <View style={{ height: "100%", top: "0%" }}>
                      <View style={{ height: "73%", top: "0%" }}>
                        <TextInput
                          placeholder={"Allergies"}
                          placeholderTextColor={"grey"}
                          onChangeText={(text) => {
                            this.setState({ allergy: text });
                          }}
                          style={styles.textInput2}
                        />
                        <TextInput
                          placeholder={"Donneur d'organe"}
                          placeholderTextColor={"grey"}
                          onChangeText={(text) => {
                            this.setState({ Organ_Donor: text });
                          }}
                          style={styles.textInput2}
                        />
                        <TextInput
                          placeholder={"Personne à contacter"}
                          placeholderTextColor={"grey"}
                          onChangeText={(text) => {
                            this.setState({ Urgence_Name: text });
                          }}
                          style={styles.textInput2}
                        />
                        <TextInput
                          placeholder={"Téléphone d'urgence"}
                          placeholderTextColor={"grey"}
                          onChangeText={(text) => {
                            this.setState({ Urgence_Phone: text });
                          }}
                          style={styles.textInput2}
                        />

                        <TouchableOpacity
                          style={styles.button1}
                          onPress={() => {
                            this.submitUrgence();
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
