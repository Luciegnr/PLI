import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  titre: {
    fontSize: 35,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 15,
    color: "white",
    shadowColor: "black",
    fontWeight: "400",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
  },

  noData: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
  },
  messNoData:{
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
    marginRight: 10,
    marginTop: "auto",
    marginBottom: "auto",
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
});
