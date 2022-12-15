import React, { Component } from "react";
import { IconButton } from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";
import styles from "../../../../styles/Urgences/styles";

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
  ErrorInfo;
};
export default class UrgenceForm extends Component<MyState, MyProps> {
  constructor(props) {
    super(props);
    this.state = {
      Blood_group: "",
      allergy: "",
      Organ_Donor: "",
      security_number: this.props.route.params.security_number,
      ErrorInfo: "",
    };
  }
  send() {
    if (
      this.state.Blood_group.trim() === "" ||
      this.state.allergy.trim() === "" ||
      this.state.Organ_Donor.trim() === ""
    ) {
      this.setState(() => ({
        ErrorInfo: "Veuillez saisir toutes les informations.",
      }));
    } else {
      this.setState(() => ({ ErrorInfo: null }));
      this.props.navigation.navigate("UrgenceForm2", {
        Blood_group: this.state.Blood_group,
        allergy: this.state.allergy,
        Organ_Donor: this.state.Organ_Donor,
        security_number: this.props.route.params.security_number,
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
              navigation.navigate("SuccessPat");
            }}
          />
          <View style={styles.style.viewInput}>
            <RNPickerSelect
              placeholder={styles.placeholder}
              items={styles.Blood_group}
              onValueChange={(value) => {
                this.setState({
                  Blood_group: value,
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
              style={styles.style.inputAllergy}
              placeholder={"Allergie connue"}
              onChangeText={(text) => {
                this.setState({ allergy: text });
              }}
            />

            <RNPickerSelect
              placeholder={styles.place}
              items={styles.Organ_Donor}
              onValueChange={(value) => {
                this.setState({
                  Organ_Donor: value,
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
          </View>
          {!!this.state.ErrorInfo && (
            <Text style={styles.style.erreur}>{this.state.ErrorInfo}</Text>
          )}
          <TouchableOpacity
            style={styles.style.NextButtonUrgence}
            onPress={() => this.send()}
          >
            <Text style={styles.style.nextButton}>Suivant</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
