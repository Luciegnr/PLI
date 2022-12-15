import React, { Component } from "react";
import styles from "../../../styles/Home/style";
import { FontAwesome5 } from "@expo/vector-icons";
import conf from "../../../conf";
import { Text, View, Image, ScrollView, ActivityIndicator } from "react-native";

// Déclaration de la navigation ainsi que des variables permettant d'afficher nos informations personnelles.
type MyState = { navigation: any; sécu: any; route: any };
type MyProps = {
  Status;
  data;
  né_le;
};
export default class Home extends Component<MyState, MyProps> {
  intervalID;

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      Status: "",
      né_le: "",
    };
  }

  // Fonction permettant de récupérer les données de l'api, ici nous récupérons toutes les informations de l'utilisateur via son numéro
  // de sécurité sociale.
  getData = () => {
    let status;
    let url = conf.url.url_user + this.props.route.params.sécu;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          status = response.status;
          this.setState({ Status: status });
        } else {
          status = response.status;
          this.setState({ Status: status });
          return response.json();
        }
      })
      .then((result) => {
        this.setState({ data: result });
        if (this.state.data.gender == "Madame") {
          this.setState({ né_le: "Née le" });
        } else {
          this.setState({ né_le: "Né le" });
        }
      });
    this.intervalID = setTimeout(this.getData.bind(this), 3000);
  };

  //Nous appelons notre fonction permettant de récupérer les données a chaque fois que la page est chargé et les données sont mise à jour toutes les 3 sec
  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  render() {
    if (this.state.Status !== 200) {
      return (
        <ScrollView style={{ backgroundColor: "white" }}>
          <View style={{ flex: 1, paddingTop: "20%", paddingBottom: "20%" }}>
            <Text style={styles.récupérationData}>
              Nous rencontrons un problème dans la récupération de vos données !{" "}
            </Text>
            <Text style={styles.dataManquante}>
              Quittez l'application et relancée la, ou vérifiez dans les
              paramètres de votre compte que vous n'ayez pas supprimmé toutes
              vos informations !{" "}
            </Text>
            <ActivityIndicator size="large" animating />
          </View>
        </ScrollView>
      );
    } else {
      return (
        <ScrollView style={{ backgroundColor: "#ffffff" }}>
          <View style={[styles.view, { backgroundColor: "transparent" }]}>
            <View>
              <View style={{ backgroundColor: "transparent" }}>
                <Image
                  source={require("../../../../assets/illustrations/carte.png")}
                  resizeMode={"cover"}
                  style={[styles.img, { backgroundColor: "transparent" }]}
                />
                <View style={styles.viewprénom}>
                  <Text style={styles.textcarte}>
                    {this.state.data.firstname}
                  </Text>
                </View>
                <View style={styles.viewnom}>
                  <Text style={styles.textcarte}>
                    {this.state.data.lastname}
                  </Text>
                </View>

                <View style={styles.viewsécu}>
                  <Text style={styles.textcarte}>
                    {this.state.data.security_number}
                  </Text>
                </View>
              </View>
              <Text style={styles.titre}>Mes informations</Text>
              <View style={styles.card}>
                <FontAwesome5
                  style={styles.fontAwesome}
                  name="address-card"
                  size={40}
                  color={"green"}
                ></FontAwesome5>
                <View style={styles.séparationCard}></View>
                <View
                  style={{
                    marginLeft: "3%",
                  }}
                >
                  <Text style={styles.label}>{this.state.data.gender}:</Text>
                  <Text style={styles.value}>
                    {this.state.data.lastname} {this.state.data.firstname}
                  </Text>
                  <Text style={styles.label}>{this.state.né_le}:</Text>
                  <Text style={styles.value}>{this.state.data.birthday}</Text>
                  <Text style={styles.label}>N° sécu:</Text>
                  <Text style={styles.value}>
                    {this.state.data.security_number}
                  </Text>
                </View>
              </View>

              <View style={styles.card}>
                <FontAwesome5
                  style={styles.fontAwesome}
                  name="map-marker-alt"
                  size={40}
                  color={"green"}
                ></FontAwesome5>
                <View style={styles.séparationMap}></View>
                <View
                  style={{
                    marginLeft: "3%",
                  }}
                >
                  <Text style={styles.label}>Adresse:</Text>
                  <Text style={styles.value}>{this.state.data.address}</Text>
                  <Text style={styles.label}>Ville:</Text>
                  <Text style={styles.value}>
                    {this.state.data.city}, {this.state.data.postal_code}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <FontAwesome5
                style={styles.fontAwesome}
                name="address-book"
                size={40}
                color={"green"}
              ></FontAwesome5>
              <View style={styles.séparationContact}></View>
              <View
                style={{
                  marginLeft: "3%",
                }}
              >
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>{this.state.data.email}</Text>
                <Text style={styles.label}>Téléphone:</Text>
                <Text style={styles.value}>{this.state.data.phone}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      );
    }
  }
}
