import React, { Component } from "react";
import styles from "../../styles/Auth/style";
import {
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

// Déclaration de la navigation ainsi que de la variable "security_number" récupérer via paramètre de la route.
type MyProps = { security_number };
type MyState = { navigation: any; route: any };

export default class Success extends Component<MyState, MyProps> {
  constructor(props) {
    super(props);
    this.state = {
      security_number: this.props.route.params.security_number,
    };
  }
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.style.ContainerSuccess}>
        <ScrollView>
          <Image
            source={require("../../../assets/illustrations/Success.png")}
            style={styles.style.ImgSuccess}
          />

          <Text style={styles.style.inscriptionValidée}>
            Inscription Validée !
          </Text>
          <Text style={styles.style.TextgoToNext}>
            Vous allez maintenant renseigner votre fiche urgence avant d'accéder
            à l'application
          </Text>

          <TouchableOpacity
            style={styles.style.GoUrgenceForm}
            onPress={() =>
              navigation.navigate("UrgenceForm", {
                security_number: this.state.security_number,
              })
            }
          >
            <Text style={styles.style.nextButton}>Compléter mes urgences</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
