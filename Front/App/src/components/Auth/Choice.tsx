import React from "react";
import styles from "../../styles/Auth/style";
import { View, Text, Image, TouchableOpacity } from "react-native";

//Création de la première page de redirection entre "login" et "logout"
//(page simple avec un return des éléments à afficher + appel du css depuis un fichier externe)
const Choice = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ backgroundColor: "#FFF", height: "100%", flex: 1 }}>
      <View style={{ flex: 2.5, top: "16%" }}>
        <Text style={styles.style.TitreChoice}>Wivital</Text>

        <TouchableOpacity
          style={styles.style.ConnexionChoice}
          onPress={() => {
            navigation.navigate("LoginPat");
          }}
        >
          <Text style={styles.style.nextButton}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.style.CréerChoice}
          onPress={() => {
            navigation.navigate("RegisterPat");
          }}
        >
          <Text style={styles.style.buttonEspace}>Créer son espace</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.style.viewPicture}>
        <Image
          source={require("../../../assets/illustrations/choice.png")}
          style={styles.style.imageChoice}
        />
      </View>
    </View>
  );
};

export default Choice;
