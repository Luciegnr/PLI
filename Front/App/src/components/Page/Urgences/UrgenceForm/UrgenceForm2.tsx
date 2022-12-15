import React, { Component } from "react";
import { IconButton } from "react-native-paper";
import styles from "../../../../styles/Urgences/styles";
import conf from "../../../../conf";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

type MyState = { navigation: any; route: any };
type MyProps = {
  Blood_group;
  allergy;
  Organ_Donor;
  security_number;
  Urgence_Name;
  Urgence_Phone;
  ErrorInfo;
  isLoading;
  downlines;
  requestFailed;
};
export default class UrgenceForm2 extends Component<MyState, MyProps> {
  constructor(props) {
    super(props);
    this.state = {
      Blood_group: this.props.route.params.Blood_group,
      allergy: this.props.route.params.allergy,
      Organ_Donor: this.props.route.params.Organ_Donor,
      security_number: this.props.route.params.security_number,
      Urgence_Name: "",
      Urgence_Phone: "",
      ErrorInfo: "",
      isLoading: false,
      requestFailed: false,
      downlines: {},
    };
  }

  submit() {
    let sécu = this.props.route.params.security_number;
    let url = conf.url.url_urgence + `${sécu}`;
    let data = this.state;
    if (
      this.state.Urgence_Name.trim() === "" ||
      this.state.Urgence_Phone.trim() === ""
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
          if (!response.ok)
            throw new Error("status code " + response.status + url);
          else return response.json();
        })
        .then((data) => {
          this.setState({ isLoading: false, downlines: data.response });
          this.props.navigation.navigate("MyTabs", { sécu: sécu });
        });
    }
  }

  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.style.container}>
        <ScrollView>
          <Image
            source={require("../../../../../assets/illustrations/login.png")}
            style={styles.style.img}
          />
          <IconButton
            icon="arrow-left"
            color="#6fcf97"
            size={25}
            onPress={() => {
              navigation.navigate("UrgenceForm2");
            }}
          />
          <View style={styles.style.viewInput}>
            <TextInput
              style={styles.style.urgencename}
              placeholder={"Proche à contacter"}
              onChangeText={(text) => {
                this.setState({ Urgence_Name: text });
              }}
            />
            <TextInput
              style={styles.style.urgencetel}
              placeholder={"Numéro de téléphone du proche"}
              onChangeText={(text) => {
                this.setState({ Urgence_Phone: text });
              }}
            />
          </View>

          <View style={styles.style.space}></View>
          {!!this.state.ErrorInfo && (
            <Text style={styles.style.erreur}>{this.state.ErrorInfo}</Text>
          )}
          <TouchableOpacity
            style={styles.style.NextButtonUrgence}
            onPress={() => {
              this.submit();
            }}
          >
            <Text style={styles.style.nextButton}>Accéder à mon espace</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
