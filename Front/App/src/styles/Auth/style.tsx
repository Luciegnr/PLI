import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const style = StyleSheet.create({
  // Choice Screen
  ConnexionChoice: {
    alignSelf: "center",
    backgroundColor: "#6fcf97",
    padding: 17,
    width: 280,
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 30,
    borderWidth: 1.5,
    borderColor: "#6fcf97",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  CréerChoice: {
    alignSelf: "center",
    backgroundColor: "#ffff",
    padding: 17,
    width: 280,

    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#6fcf97",
    shadowColor: "#6fcf97",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  TitreChoice: {
    fontSize: 60,
    textAlign: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
  },
  buttonEspace: { textAlign: "center", color: "#6fcf97", fontSize: 20 },
  viewPicture: {
    width: "100%",
    height: "100%",
    flex: 1.5,
    marginTop: 30,
  },

  imageChoice: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    bottom: 0,
  },
  // Login Screen

  ConnexionLogin: {
    alignSelf: "center",
    backgroundColor: "#6fcf97",
    padding: 17,
    width: 280,
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 30,
    borderWidth: 1.5,
    borderColor: "#6fcf97",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  Text: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 0,
    shadowColor: "black",
    marginBottom: 245,
  },

  TextButton: {
    fontSize: 15,
    shadowColor: "black",
  },

  InputMail: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 50,
    borderWidth: 1.5,
    marginTop: 45,
    paddingHorizontal: 10,
    borderColor: "grey",
    borderRadius: 7,
    paddingVertical: 13,
  },

  InputPassword: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 50,
    borderWidth: 1.5,
    marginTop: 30,
    paddingHorizontal: 10,
    borderColor: "grey",
    borderRadius: 7,
    paddingVertical: 13,
  },
  titre: {
    fontSize: 60,
    textAlign: "center",
    marginTop: 55,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
  },
  erreur:{ color: "red", textAlign: "center" },

  imgLogin:{
    resizeMode: "cover",
    width: "100%",
    height: "30%",
    bottom: 130,
  },
  // ===================== Register Screens =====================

  NextRegister: {
    alignSelf: "center",
    backgroundColor: "#6fcf97",
    padding: 15,
    width: wp("68%"),
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 50,
    borderWidth: 1.5,
    borderColor: "#6fcf97",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  viewText: {
    flexDirection: "column",
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  email: {
    padding: 10,
    borderWidth: 1.5,
    borderColor: "grey",
    borderRadius: 7,
    marginHorizontal: 2,
    marginVertical: 2,
    width: wp("65%"),
  },
  password: {
    padding: 10,
    borderWidth: 1.5,
    width: wp("65%"),
    borderColor: "grey",
    borderRadius: 7,
    marginHorizontal: 2,
    marginVertical: 8,
  },
  sécu: {
    padding: 10,
    borderWidth: 1.5,
    width: wp("65%"),
    borderColor: "grey",
    borderRadius: 7,
    marginHorizontal: 2,
    marginVertical: 2,
  },
  nextButton: { textAlign: "center", color: "#fff", fontSize: 20 },
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  img: {
    width: wp("100%"),
    height: hp("30%"),
    alignSelf: "center",
    resizeMode: "contain",
  },

  prénom: {
    padding: 10,
    borderWidth: 1.5,
    borderColor: "grey",
    borderRadius: 7,
    marginHorizontal: 2,
    marginVertical: 2,
    width: wp("65%"),
  },
  nom: {
    padding: 10,
    borderWidth: 1.5,
    width: wp("65%"),
    borderColor: "grey",
    borderRadius: 7,
    marginHorizontal: 2,
    marginVertical: 18,
  },
  sexe: {
    flexDirection: "row",
    margin: 0,
    paddingVertical: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  anniversaire: {
    borderWidth: 1.5,
    padding: 10,
    width: wp("35%"),
    borderRadius: 7,
    marginHorizontal: 10,
    borderColor: "grey",
    textAlign: "center",
    fontSize: 13,
  },

  adresse: {
    padding: 10,
    borderWidth: 1.5,
    borderColor: "grey",
    borderRadius: 7,
    marginHorizontal: 2,
    marginVertical: 2,
    width: wp("65%"),
  },

  ville: {
    padding: 10,
    borderWidth: 1.5,
    width: wp("65%"),
    borderColor: "grey",
    borderRadius: 7,
    marginHorizontal: 2,
    marginVertical: 18,
  },

  InputRow: {
    flexDirection: "row",
    margin: 0,
    paddingVertical: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  téléphone: {
    borderWidth: 1.5,
    padding: 10,
    width: wp("35%"),
    borderRadius: 7,
    marginHorizontal: 10,
    borderColor: "grey",
  },
  postal: {
    borderWidth: 1.5,
    padding: 10,
    width: wp("25%"),
    borderRadius: 7,
    marginHorizontal: 10,
    borderColor: "grey",
    textAlign: "center",
  },
  // Success Screen
  GoUrgenceForm: {
    alignSelf: "center",
    backgroundColor: "#6fcf97",
    padding: 15,
    width: wp("68%"),
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 50,
    borderWidth: 1.5,
    borderColor: "#6fcf97",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
inscriptionValidée:{
  fontSize: 30,
  textAlign: "center",
  marginBottom: 15,
  shadowColor: "black",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.5,
},
TextgoToNext:{
  fontSize: 16,
  opacity: 0.7,
  textAlign: "center",
  marginTop: 5,
  marginBottom: 15,
  marginRight: 20,
  marginLeft: 20,
  fontWeight: "400",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.5,
},
  ContainerSuccess: {
    flex: 1,
    backgroundColor: "white",
  },

  ImgSuccess: {
    marginTop: 100,
    width: wp("100%"),
    height: hp("30%"),
    alignSelf: "center",
    resizeMode: "contain",
  },
});

const sexe = [
  {
    label: "Femme",
    value: "Femme",
  },
  {
    label: "Homme",
    value: "Homme",
  },
  {
    label: "Autre",
    value: "Autre",
  },
];

const placeholder = {
  label: "Sexe",
  value: null,
  color: "#9EA0A4",
};

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 4,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#6fcf97",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#6fcf97",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#6fcf97",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#6fcf97",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: "#6fcf97",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#aaaaaa",
  labelSize: 13,
  currentStepLabelColor: "#aaaaaa",
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    borderWidth: 1.5,
    padding: 10,
    width: wp("25%"),
    borderRadius: 7,
    marginHorizontal: 10,
    borderColor: "grey",
    textAlign: "center",
  },
  inputAndroid: {
    borderWidth: 1.5,
    padding: 10,
    width: wp("25%"),
    borderRadius: 7,
    marginHorizontal: 10,
    borderColor: "grey",
    textAlign: "center",
  },
});

const labels = ["0%", "50%", "100%"];

export default {
  sexe,
  style,
  customStyles,
  placeholder,
  pickerSelectStyles,
  labels,
};
