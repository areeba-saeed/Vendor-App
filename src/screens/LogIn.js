import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  useWindowDimensions,
  StyleSheet,
  Button,
} from "react-native";
import React from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { windowHeight } from "../../src/utils/Dimensions";
import { windowWidth } from "../../src/utils/Dimensions";
import Logo from "../../assets/images/logo_1.png";
import Home from "./Home";
import TermsConditions from "./TermsConditions";
import PrivacyPolicy from "./PrivacyPolicy";

const LogIn = ({ navigation }) => {
  const [modelno, setModelno] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();

  return (
    <SafeAreaView
      style={{
        height: windowHeight,
        width: windowWidth,
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "lightgray",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />

        <TextInput
          value={modelno}
          onChangeText={setModelno}
          placeholder="Enter Your Model No."
          style={{
            backgroundColor: "white",
            width: "100%",
            borderColor: "#e8e8e8",
            borderWidth: 4,
            borderRadius: 6,
            paddingHorizontal: 10,
            marginVertical: 12,
          }}
        />

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter Your Password"
          secureTextEntry={true}
          style={{
            backgroundColor: "white",
            width: "100%",
            borderColor: "#e8e8e8",
            borderWidth: 4,
            borderRadius: 6,
            paddingHorizontal: 10,
            marginVertical: 12,
          }}
        />
        <Text>
          By Registering, you confirm that you accept our {""}
          <Text
            style={{ color: "blue" }}
            onPress={() => navigation.navigate(TermsConditions)}
          >
            Terms of Use
          </Text>{" "}
          and {""}
          <Text
            style={{ color: "blue" }}
            onPress={() => navigation.navigate(PrivacyPolicy)}
          >
            Privacy Policy.
          </Text>
        </Text>
        <View
          style={{
            marginTop: 20,
            width: "50%",
          }}
        >
          <Button
            onPress={() => navigation.navigate(Home)}
            title="Sign In"
            color="orange"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 70,
    width: "70%",
    maxHeight: 200,
    maxWidth: 300,
    marginLeft: 60,
  },
});

export default LogIn;
