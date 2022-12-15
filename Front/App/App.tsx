import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Choice from "./src/components/Auth/Choice";
import Register from "./src/components/Auth/Register/Register";
import Register2 from "./src/components/Auth/Register/Register2";
import Register3 from "./src/components/Auth/Register/Register3";
import Login from "./src/components/Auth/Login";
import Success from "./src/components/Auth/Success";

import GetUrgence from "./src/components/Page/Urgences/Urgence/GetUrgence";
import GetPdf from "./src/components/Page/PDF/PdfScreen";
import UrgenceForm from "./src/components/Page/Urgences/UrgenceForm/UrgenceForm";
import UrgenceForm2 from "./src/components/Page/Urgences/UrgenceForm/UrgenceForm2";

import Calendrier from "./src/components/Page/Calendrier/planning";
import Paramètre from "./src/components/Page/Paramètre/ParamètreScreen";
import Home from "./src/components/Page/Home/HomeScreen";

import UpdateUrgence from "./src/components/Page/Paramètre/urgence";
import UpdateProfil from "./src/components/Page/Paramètre/profil";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs({ navigation, route }) {
  const { sécu } = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#F5FFFA",
          position: "absolute",
          bottom: 2,
          marginHorizontal: 20,
          height: 60,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowOffset: { width: 10, height: 10 },
          paddingHorizontal: 20,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{ sécu: sécu }}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ position: "absolute", top: "50%" }}>
              <FontAwesome5
                name="home"
                size={20}
                color={focused ? "red" : "grey"}
              ></FontAwesome5>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="GetUrgencePat"
        component={GetUrgence}
        initialParams={{ sécu: sécu }}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ position: "absolute", top: "50%" }}>
              <FontAwesome5
                name="info"
                size={20}
                color={focused ? "red" : "grey"}
              ></FontAwesome5>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="GetCAlendrierPat"
        component={Calendrier}
        initialParams={{ sécu: sécu }}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 10,
                borderRadius: 30,
              }}
            >
              <FontAwesome5
                name="calendar-alt"
                size={20}
                color={"white"}
              ></FontAwesome5>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="GetPdfPat"
        initialParams={{ sécu: sécu }}
        component={GetPdf}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ position: "absolute", top: "50%" }}>
              <FontAwesome5
                name="notes-medical"
                size={20}
                color={focused ? "red" : "grey"}
              ></FontAwesome5>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Paramètre"
        initialParams={{ sécu: sécu }}
        component={Paramètre}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ position: "absolute", top: "50%" }}>
              <FontAwesome5
                name="user-cog"
                size={20}
                color={focused ? "red" : "grey"}
              ></FontAwesome5>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: true }}
        initialRouteName="Start"
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="ChoicePat"
          component={Choice}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="RegisterPat"
          component={Register}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RegisterPat2"
          component={Register2}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RegisterPat3"
          component={Register3}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginPat"
          component={Login}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="SuccessPat"
          component={Success}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="UrgenceForm"
          component={UrgenceForm}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="UrgenceForm2"
          component={UrgenceForm2}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="UpdateProfil"
          component={UpdateProfil}
        />
          <Stack.Screen
          options={{ headerShown: false }}
          name="UpdateUrgence"
          component={UpdateUrgence}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MyTabs"
          component={MyTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
