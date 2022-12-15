import { FontAwesome5 } from "@expo/vector-icons";
import React, { Component } from "react";
import { ActivityIndicator, Animated } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native";
import conf from "../../../conf";
import moment from "moment";
import "moment/locale/fr";
import * as OpenAnything from "react-native-openanything";
import styles from "../../../styles/Pdf/style";

// Déclaration de la navigation ainsi que de la variable status pour gérer l'affichage en fonction de la récupération de données.
type MyState = {
  navigation: any;
  sécu: any;
  route: any;
};
type MyProps = {
  Status;
  dataSource;
};
export default class Pdf extends Component<MyState, MyProps> {
  intervalID;

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      Status: "",
    };
  }
  // Fonction permettant de récupérer les données de l'api, ici nous récupérons les ordonnances de l'utilisateur via son
  // numéro de sécurité sociale.

  getData = () => {
    let status;
    let sécu = this.props.route.params.sécu;
    let url = conf.url.url_GetPdf + sécu + conf.url.url_pdf;
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
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson,
        });
      });
    this.intervalID = setTimeout(this.getData.bind(this), 3000);
  };

  //Nous appelons notre fonction permettant de récupérer les données a chaque fois que la page est chargé et les données sont mise à jour
  // toutes les 3 sec

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  // Si l'utilisateur n'a pas encore d'ordonnace nous lui retournons une page specifique le lui indiquant, dans le cas ou il possède des ordonnances
  // il a la possibilité de télécharger le pdf
  render() {
    const getHeader = () => {
      return <Text style={styles.titre}>{"Mes Ordonnances"}</Text>;
    };

    const getFooter = () => {
      return <View style={{ paddingBottom: "30%" }}></View>;
    };
    moment.locale("fr");
    if (this.state.Status !== 200) {
      return (
        <View style={{ height: "100%", top: "40%" }}>
          <Text style={styles.noData}>
            Votre dossier médicale dans votre poche !{" "}
          </Text>
          <Text style={styles.messNoData}>
            Si vos docteurs n'utilisent pas encore Wivital n'hésitez pas à leur
            en parler !{" "}
          </Text>
          <ActivityIndicator size="large" animating />
        </View>
      );
    } else {
      const { navigation } = this.props;

      return (
        <View style={{ flex: 1 }}>
          <Image
            source={require("../../../../assets/illustrations/fond4.jpeg")}
            style={StyleSheet.absoluteFillObject}
            blurRadius={80}
          ></Image>
          <View style={{ flex: 1 }}>
            <Animated.FlatList
              style={{ flex: 1, paddingTop: "15%", paddingBottom: "60%" }}
              data={this.state.dataSource}
              ListHeaderComponent={getHeader}
              ListFooterComponent={getFooter}
              keyExtractor={(item, index) => {
                return (
                  item._id,
                  item.metadata.doctor,
                  item.metadata.profession,
                  item.uploadDate
                );
              }}
              contentContainerStyle={{ padding: 20, paddingTop: 42 }}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <FontAwesome5
                    style={styles.fontAwesome}
                    name="cloud-download-alt"
                    color="grey"
                    size={35}
                    key={item.id}
                    onPress={() =>
                      OpenAnything.Pdf(conf.url.url_InfoPdf + item._id)
                    }
                  />
                  <View>
                    <Text style={styles.label} key={item.metadata.doctor}>
                      Dr. {item.metadata.doctor}
                    </Text>
                    <Text style={styles.value} key={item.metadata.profession}>
                      {item.metadata.profession}
                    </Text>
                    <Text
                      style={{ fontSize: 12, opacity: 0.8 }}
                      key={item.metadata.date}
                    >
                      {moment(item.metadata.date).format("D MMM YYYY")}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      );
    }
  }
}
