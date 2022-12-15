import React, { Component } from "react";
import { Text, View, ScrollView, ActivityIndicator } from "react-native";
import styles from "../../../../styles/Urgences/GetStyles";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { FontAwesome5 } from "@expo/vector-icons";
import conf from "../../../../conf";
type MyState = { navigation: any; sécu: any; route: any };
type MyProps = {
  Status;
  data;
  né_le;
};
export default class GetUrgence extends Component<MyState, MyProps> {
  intervalID;

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      Status: "",
      né_le: "",
    };
  }
  getData = () => {
    let status;
    let url = conf.url.url_urgence + this.props.route.params.sécu;
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
      });
    this.intervalID = setTimeout(this.getData.bind(this), 1000);
  };
  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }
  render() {
    if (this.state.Status !== 200) {
      return (
        <View style={{ height: "100%", top: "40%" }}>
          <Text style={styles.récupérationData}>
            {
              " Nous rencontrons un problème dans la récupération de votre fiche urgence ! "
            }
          </Text>
          <Text style={styles.dataManquante}>
            {
              "Vérifiez dans vos paramètres que vous ayez bien renseigné vos informations ! "
            }
          </Text>
          <ActivityIndicator size="large" animating />
        </View>
      );
    } else {
      return (
        <ScrollView style={{ backgroundColor: "#ffffff" }}>
          <View style={styles.view}>
            <View>
              <Text style={styles.titre}>Mes informations d'urgence</Text>
              <View style={styles.card}>
                <FontAwesome5
                  style={styles.fontAwesome}
                  name="address-book"
                  size={40}
                  color={"green"}
                ></FontAwesome5>
                <View style={styles.séparationProche}></View>
                <View style={styles.textData}>
                  <Text style={styles.label}>Proche à contacter:</Text>
                  <Text style={styles.data}>
                    {this.state.data.Urgence_Name}
                  </Text>
                  <Text style={styles.label}>Contact du proche:</Text>
                  <Text style={styles.data}>
                    {this.state.data.Urgence_Phone}
                  </Text>
                </View>
              </View>
              <View style={styles.card}>
                <FontAwesome5
                  style={styles.fontAwesome}
                  name="notes-medical"
                  size={40}
                  color={"green"}
                ></FontAwesome5>

                <View style={styles.séparationInfo}></View>
                <View style={styles.textData}>
                  <Text style={styles.label}>Mon groupe sanguin:</Text>
                  <Text style={styles.data}>{this.state.data.Blood_group}</Text>
                  <Text style={styles.label}>Mes allergies:</Text>
                  <Text style={styles.data}>{this.state.data.allergy}</Text>
                  <Text style={styles.label}>Donneur d'organe :</Text>
                  <Text style={styles.data}>{this.state.data.Organ_Donor}</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      );
    }
  }
}
