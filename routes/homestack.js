import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "../src/screens/LogIn";
import Home from "../src/screens/Home";
import Notifications from "../src/screens/Notifications";
import Device1 from "../src/screens/Device1";
import FAQ from "../src/screens/FAQ";
import DrawerContent from "./DrawerContent";
import CreateUser from "../src/screens/CreateUser";
import UpdateUser from "../src/screens/UpdateUser";
import Refuel from "../src/screens/Refuel";
import PaymentForm from "../src/screens/PaymentForm";
import User1 from "../src/screens/User1";
import PaymentInfo from "../src/screens/PaymentInfo";
import VendorDevice1 from "../src/screens/VendorDevice1";
import TermsConditions from "../src/screens/TermsConditions";
import PrivacyPolicy from "../src/screens/PrivacyPolicy";
import Assign from "../src/screens/Assign";
import Invoice1 from "../src/screens/Invoice1";
import Users from "../src/screens/Users";

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen name="LogIn" component={LogIn} /> */}
        <Stack.Screen name="Home" component={DrawerContent} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Device1" component={Device1} />
        <Stack.Screen name="FAQ" component={FAQ} />
        <Stack.Screen name="Assign" component={Assign} />
        <Stack.Screen name="User1" component={User1} />
        <Stack.Screen name="CreateUser" component={CreateUser} />
        <Stack.Screen name="Invoice1" component={Invoice1} />
        <Stack.Screen name="UpdateUser" component={UpdateUser} />
        <Stack.Screen name="Refuel" component={Refuel} />
        <Stack.Screen name="PaymentForm" component={PaymentForm} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="VendorDevice1" component={VendorDevice1} />
        <Stack.Screen name="TermsConditions" component={TermsConditions} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />

        {/* <Stack.Screen name="Home1" component={Home1} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
