import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const style = StyleSheet.create({
  // Urgence Form Screen
  NextButtonUrgence: {
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

  viewInput:{
    flexDirection: "column",
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  inputAllergy:{
    padding: 10,
    borderWidth: 1.5,
    width: wp("65%"),
    borderColor: "grey",
    borderRadius: 7,
    marginHorizontal: 2,
    marginVertical: 8,
  },

  nextButton:{ textAlign: "center", color: "#fff", fontSize: 20 },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
urgencename: {
  padding: 10,
  borderWidth: 1.5,
  borderColor: "grey",
  borderRadius: 7,
  marginHorizontal: 2,
  marginVertical: 2,
  width: wp("65%"),
},
urgencetel:{
  padding: 10,
  borderWidth: 1.5,
  width: wp("65%"),
  borderColor: "grey",
  borderRadius: 7,
  marginHorizontal: 2,
  marginVertical: 18,
},
space:{
  flexDirection: "row",
  margin: 0,
  paddingVertical: 2,
  justifyContent: "center",
  alignItems: "center",
},
erreur:{ color: "red", textAlign: "center" },
  img: {
    width: wp("100%"),
    height: hp("30%"),
    alignSelf: "center",
    resizeMode: "contain",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    padding: 10,
    borderWidth: 1.5,
    width: wp("65%"),
    borderColor: "grey",
    borderRadius: 7,
    marginVertical: 8,
    marginRight: "auto",
    marginLeft: "auto",
  },
  inputAndroid: {
    padding: 10,
    borderWidth: 1.5,
    width: wp("65%"),
    borderColor: "grey",
    borderRadius: 7,
    marginHorizontal: 2,
    marginVertical: 8,
  },
});

const placeholder = {
  label: "Groupe sanguin",
  value: null,
  color: "#9EA0A4",
};

const Blood_group = [
  {
    label: "A+",
    value: "A+",
  },
  {
    label: "A-",
    value: "A-",
  },
  {
    label: "B+",
    value: "B+",
  },
  {
    label: "B-",
    value: "B-",
  },
  {
    label: "AB+",
    value: "AB+",
  },
  {
    label: "AB-",
    value: "AB-",
  },
  {
    label: "O+",
    value: "O+",
  },
  {
    label: "O-",
    value: "O-",
  },
];

 
const place = {
  label: "Je suis donneur d'organe",
  value: null,
  color: "#9EA0A4",
};

const Organ_Donor = [
  {
    label: "Oui",
    value: "Oui",
  },
  {
    label: "Non",
    value: "Non",
  },
];

export default {style, pickerSelectStyles, placeholder, Blood_group, place, Organ_Donor}