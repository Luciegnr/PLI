import React, { Component } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Modal, View, Text, TextInput } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import styles from "../../../styles/Paramètre/style";

type MyState = { navigation: any; sécu: any; route: any };

//Création de la page du paramètre (permettant d'accéder aux formulaire de modification
//des urgences et du profil)

export default class Paramètre extends Component<MyState> {
  intervalID;
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <>
        <ScrollView style={{ backgroundColor: "white" }}>
          <View style={{ flex: 1, paddingTop: "15%", paddingBottom: "100%" }}>
            <Text style={styles.view}>{"Paramètres"}</Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("UpdateProfil", {
                  sécu: this.props.route.params.sécu,
                });
              }}
            >
              <View style={styles.viewcard}>
                <View>
                  <Text style={{ fontSize: 17 }}>Mon profil</Text>

                  <Text style={styles.soustitre}>
                    Modifier les informations de mon compte
                  </Text>
                </View>
                <View style={styles.chevron}>
                  <FontAwesome5
                    name="chevron-right"
                    size={20}
                    color={"grey"}
                  ></FontAwesome5>
                </View>
              </View>

              <View style={styles.ligne} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("UpdateUrgence", {
                  sécu: this.props.route.params.sécu,
                });
              }}
            >
              <View style={styles.viewcard}>
                <View>
                  <Text style={{ fontSize: 17 }}>Urgences</Text>

                  <Text style={styles.soustitre}>
                    Modifier mes informations en cas d'urgence
                  </Text>
                </View>
                <View style={styles.chevron}>
                  <FontAwesome5
                    name="chevron-right"
                    size={20}
                    color={"grey"}
                  ></FontAwesome5>
                </View>
              </View>

              <View style={styles.ligne} />
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.viewcard}>
                <View>
                  <Text style={{ fontSize: 17 }}>Mes docteurs</Text>

                  <Text style={styles.soustitre}>
                    Mes docteurs participant à Wivital
                  </Text>
                </View>
                <View style={styles.chevron}>
                  <FontAwesome5
                    name="chevron-right"
                    size={20}
                    color={"grey"}
                  ></FontAwesome5>
                </View>
              </View>

              <View style={styles.ligne} />
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.viewcard}>
                <View>
                  <Text style={{ fontSize: 17 }}>Nous contacter</Text>

                  <Text style={styles.soustitre}>
                    Vous souhaiter nous envoyer un message ?
                  </Text>
                </View>
                <View style={styles.chevron}>
                  <FontAwesome5
                    name="chevron-right"
                    size={20}
                    color={"grey"}
                  ></FontAwesome5>
                </View>
              </View>

              <View style={styles.ligne} />
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.viewcard}>
                <View>
                  <Text style={{ fontSize: 17 }}>A propos</Text>

                  <Text style={styles.soustitre}>Conditions d'utilisation</Text>
                </View>
                <View style={styles.chevron}>
                  <FontAwesome5
                    name="chevron-right"
                    size={20}
                    color={"grey"}
                  ></FontAwesome5>
                </View>
              </View>

              <View style={styles.ligne} />
            </TouchableOpacity>
            <View style={styles.buttonlogout}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("LoginPat");
                }}
              >
                <Text style={styles.logout}>Déconnexion</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}
