import { StyleSheet } from "react-native";

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "90%",
    height: "55%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 12,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    paddingTop: 5,
  },
  Space: {
    width: "70%",
    height: "40%",
  },
  textInput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    marginRight: 5,
    paddingHorizontal: 10,
    borderColor: "grey",
    borderRadius: 7,
    paddingVertical: 13,
    width: 120,
  },
  textInputDoc: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    marginRight: 5,
    paddingHorizontal: 10,
    borderColor: "grey",
    borderRadius: 7,
    paddingVertical: 13,
    width: 145,
    marginBottom: "5%",
  },
  item: {
    backgroundColor: "#8FBC8F",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  viewAdd: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
  viewInput: {
    flexDirection: "column",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10
  },
  viewCalendar: { paddingTop: "10%", flex: 1, backgroundColor: "#ffffff" },
});
