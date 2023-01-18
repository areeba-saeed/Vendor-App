import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { windowHeight } from "../../src/utils/Dimensions";
import { windowWidth } from "../../src/utils/Dimensions";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import CreateUser from "./CreateUser";
import SearchBar from "../components/SearchBar";
import UnApprove from "../components/Unapprove";
import Approve from "../components/Approve";

const ApproveRequests = ({ navigation }) => {
  const nav = useNavigation();
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  // get data from the fake api endpoint
  useEffect(() => {
    const getData = () => {
      // setFakeData(data);
    };
    getData();
  }, []);

  return (
    <SafeAreaView
      style={{
        height: windowHeight,
        width: windowWidth,
        flex: 1,
      }}
    >
      {/* <ScrollView vertical showsVerticalScrollIndicator={false}> */}
      <View
        style={{
          flex: 1,
          backgroundColor: "lightgray",
        }}
      >
        <View
          style={{
            backgroundColor: "orange",
            height: "15%",
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
              onPress={() => navigation.navigate("Payment Requests")}
            >
              <AntDesign name="back" size={30} color="#FFF" />
            </TouchableOpacity>
            <View
              style={{
                //width:'100%',
                marginTop: -33,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 28,
                  color: "#FFF",
                  fontWeight: "bold",
                }}
              >
                Approved Requests
              </Text>
            </View>
          </View>
        </View>

    
        <View
          style={{
            alignSelf: "center",
          }}
        >
          <Approve window="100%" setClicked={setClicked} />
        </View>
      </View>
      {/* </ScrollView> */}
    
    </SafeAreaView>
  );
};

export default ApproveRequests;
