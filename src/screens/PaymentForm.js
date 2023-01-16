import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { windowHeight } from "../../src/utils/Dimensions";
import { windowWidth } from "../../src/utils/Dimensions";
import { Picker } from "@react-native-picker/picker";
import AntDesign from "react-native-vector-icons/AntDesign";
import PaymentInfo from "./PaymentInfo";
import Home from "./Home";

const PaymentForm = ({ navigation }) => {
  const [accname, setACCName] = useState("");
  const [accno, setAccNo] = useState("");
  const [banks, setBanks] = useState("HBL");

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
        }}
      >
        <View
          style={{
            backgroundColor: "orange",
            height: "20%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              //flexDirection: 'row',
              //justifyContent: 'space-between',
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("My Accounts")}
            >
              <AntDesign name="back" size={30} color="#FFF" />
            </TouchableOpacity>
            <View
              style={{
                //width:'100%',
                paddingTop: 20,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 26,
                  color: "#FFF",
                  fontWeight: "bold",
                }}
              >
                Add Your Account Information Here
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            padding: 10,
          }}
        >
          <TextInput
            value={accname}
            onChangeText={setACCName}
            placeholder="Enter Your Account Name"
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
            value={accno}
            onChangeText={setAccNo}
            placeholder="Enter Your Account Number"
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

          <View
            style={{
              width: "100%",
            }}
          >
            <Text
              style={{
                paddingHorizontal: 10,
                color: "black",
                fontSize: 15,
              }}
            >
              Your Bank:
            </Text>
            <Picker
              selectedValue={banks}
              onValueChange={(banks) => setBanks(banks)}
            >
              <Picker.Item label="HBL" value="Habib Bank Ltd." />
              <Picker.Item label="UBL" value="United Bank Ltd." />
              <Picker.Item label="MCB" value="MCB" />
              <Picker.Item label="Meezan" value="Meezan Bank" />
              <Picker.Item label="Soneri" value="Soneri Bank" />
              <Picker.Item label="EasyPaisa" value="Easy Paisa" />
              <Picker.Item label="JazzCash" value="Jazz Cash" />
            </Picker>
          </View>
          <View
            style={{
              alignSelf: "auto",
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 20,
              }}
            >
              Selected: {banks}
            </Text>
          </View>

          <View
            style={{
              width: "50%",
              marginTop: 25,
            }}
          >
            <Button title="Add" color="orange" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentForm;