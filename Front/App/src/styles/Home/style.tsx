import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  img: {
    width: wp("85%"),
    height: hp("30%"),
    alignSelf: "center",
    resizeMode: "contain",
  },

  card: {
    flexDirection: "row",
    padding: 20,
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    backgroundColor: "#ffffff",
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },

  fontAwesome: {
    marginTop: "auto",
    marginBottom: "auto",
  },

  récupérationData: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
  },
  dataManquante: {
    fontSize: 15,
    opacity: 0.7,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 15,
    marginRight: 10,
    marginLeft: 10,
    fontWeight: "400",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
  },
  view: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: "15%",
    paddingBottom: "25%",
    padding: 20,
  },
  titre: {
    marginBottom: "5%",
    fontSize: 30,
    textAlign: "center",
    marginTop: "2%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
  },
  séparationCard:{
    width: hp("0.3%"),
    backgroundColor: "#A9A9A9",
    marginLeft: "3%",
  },
  label:{ fontSize: 20, fontWeight: "500", marginTop: "3%" },
  value:{ fontSize: 18, opacity: 0.7 },
  séparationMap:{
    width: hp("0.3%"),
    backgroundColor: "#A9A9A9",
    marginLeft: "8%",
  },
  séparationContact:{
    width: hp("0.3%"),
    backgroundColor: "#A9A9A9",
    marginLeft: "7%",
  },
  viewprénom:{
    width: "45%",
    alignSelf: "center",
    position: "absolute",
    bottom: "35%",
  },
  textcarte:{
    marginTop: 15,
    paddingHorizontal: "auto",
    fontWeight: "bold",
  },
  viewnom:{
    width: "45%",
    alignSelf: "center",
    position: "absolute",
    bottom: "28%",
  },
  viewsécu:{
    width: "45%",
    alignSelf: "center",
    position: "absolute",
    bottom: "20%",
  },
});
