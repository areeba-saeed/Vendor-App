import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { windowHeight } from "../../src/utils/Dimensions";
import { windowWidth } from "../../src/utils/Dimensions";
import AntDesign from "react-native-vector-icons/AntDesign";
import UnApprove from "../components/Unapprove";
import UnApproveRequests from "./UnApproveRequests";
import Approve from "../components/Approve";
import ApproveRequests from "./ApproveRequests";

const PaymentRequests = ({ navigation }) => {
  const nav = useNavigation();
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  // Temporary data
  const data = [
    {
      userId: "01",
      amount: "200",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      userId: "02",
      amount: "200",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      userId: "03",
      amount: "200",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      userId: "04",
      amount: "200",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      userId: "05",
      amount: "200",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      userId: "06",
      amount: "200",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      userId: "07",
      amount: "200",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      userId: "08",
      amount: "200",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  ];

  // get data from the fake api endpoint
  useEffect(() => {
    const getData = () => {
      setFakeData(data);
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
            <TouchableOpacity onPress={() => nav.openDrawer()}>
              <AntDesign name="bars" size={30} color="#FFF" />
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
                Payment Requests
              </Text>
            </View>
          </View>
        </View>
        {/* UnApprove Table */}
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            marginVertical: 0,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "300",
            }}
          >
            Unapproved Requests
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(UnApproveRequests)}
          >
            <Text
              style={{
                color: "orange",
                fontSize: 18,
              }}
            >
              See all
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignSelf: "center",
          }}
        >
          <UnApprove setClicked={setClicked} window="60%" />
        </View>

        {/* Approve Table */}
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            marginVertical: 0,
            justifyContent: "space-between",
            marginTop:-200
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "300",
            }}
          >
            Approved Requests
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(ApproveRequests)}
          >
            <Text
              style={{
                color: "orange",
                fontSize: 18,
              }}
            >
              See all
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignSelf: "center",
            
          }}
        >
          <Approve bottom={-135} setClicked={setClicked} window="60%" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentRequests;
