import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { windowHeight } from "../../src/utils/Dimensions";
import { windowWidth } from "../../src/utils/Dimensions";
import UserTable from "../components/UserTable";
import Notifications from "./Notifications";
import Users from "./Users";
import SearchBar from "../components/SearchBar";
import Noti from "./Noti";

const Home = ({ navigation }) => {
  const nav = useNavigation();
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  // Temporary data
  const data = [
    {
      userId: "01",
      name: "Ifra",
    },
    {
      userId: "02",
      name: "Ifra",
    },
    {
      userId: "03",
      name: "Ifra",
    },
    {
      userId: "04",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
    },
    {
      userId: "055",
      name: "Ifra",
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
      <View
        style={{
          backgroundColor: "lightgray",
        }}
      >
        <View
          style={{
            backgroundColor: "lightgray",
            height: "31%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <TouchableOpacity onPress={() => nav.openDrawer()}>
              <AntDesign name="bars" size={30} color="orange" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 28,
                color: "orange",
                fontWeight: "bold",
              }}
            >
              Home
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(Notifications)}
            >
              <Ionicons name="notifications" size={30} color="orange" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: "center",
              // marginTop: windowHeight - 700,
              // justifyContent: "center",
              height: windowHeight - 350,
              width: windowWidth,
              marginTop: -30,
              marginLeft: "5%",
              marginRight: "10%",
              marginBottom: "5%",

              // alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/images/logo_1.png")}
              style={{
                height: windowHeight - 300,
                width: windowWidth - 120,
                alignItems: "center",
                resizeMode: "contain",
              }}
            />
          </View>
        </View>

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
            Users
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate(Users)}>
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

        <View>
          <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
          />
        </View>

        <View
          style={{
            alignSelf: "center",
            marginTop: -20,
          }}
        >
          <UserTable
            searchPhrase={searchPhrase}
            data={fakeData}
            setClicked={setClicked}
          />
        </View>
      </View>
      <View>
        <Noti />
      </View>
    </SafeAreaView>
  );
};

export default Home;