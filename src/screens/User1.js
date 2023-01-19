import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import { windowHeight } from "../../src/utils/Dimensions";
import { windowWidth } from "../../src/utils/Dimensions";
import Users from "./Users";
import { Row, Table, TableWrapper } from "react-native-table-component";
import Device1 from "./Device1";
import { ScrollView } from "react-native-gesture-handler";

const User1 = ({ navigation }) => {
  const tableHead = ["Device ID", "Action"];
  // Temporary data
  const data = [
    {
      userId: "01",
      status: "Assigned",
    },
    {
      userId: "02",
      status: "UnAssigned",
    },
    {
      userId: "03",
      status: "Assigned",
    },
    {
      userId: "04",
      status: "UnAssigned",
    },
    {
      userId: "05",
      status: "Assigned",
    },
    {
      userId: "06",
      status: "Assigned",
    },
  ];

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
            <TouchableOpacity onPress={() => navigation.navigate(Users)}>
              <AntDesign name="back" size={30} color="#FFF" />
            </TouchableOpacity>
            <View
              style={{
                //width:'100%',
                marginTop: 0,
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
                User1
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: "25%",
            width: windowWidth,
            marginTop: 10,
            backgroundColor: "#FFF",
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              width: windowWidth,
              alignItems: "center",
              textAlign: "center",
            }}
          >
            User Information
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginTop: 20,
            }}
          >
            Name
          </Text>

          <Text
            style={{
              fontSize: 15,
              marginTop: 20,
            }}
          >
            No. of Devices
          </Text>
        </View>

        <View style={styles.container}>
          <Table borderStyle={{ borderColor: "transparent" }}>
            <Row
              data={tableHead}
              style={styles.head}
              textStyle={styles.headtext}
            />
          </Table>
          <ScrollView>
            {data.map((user) => (
              <TableWrapper style={styles.row}>
                <Text style={styles.text}>{user.userId}</Text>

                <TouchableOpacity onPress={() => navigation.navigate(Device1)}>
                  <View style={styles.btn}>
                    <Text style={styles.btnText}>View</Text>
                  </View>
                </TouchableOpacity>
              </TableWrapper>
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            //width: windowWidth-200,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 25,
          }}
        ></View>
      </View>
    </SafeAreaView>
  );
};

export default User1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
  },
  head: {
    height: 70,
    backgroundColor: "#D9DDDC",
    paddingLeft: 20,
    flexDirection: "row",
  },

  headtext: {
    width: "100%",
    // borderColor:"red",
    // borderWidth:2,
  },
  view: {
    height: 0,
  },
  text: {
    width: "50%",
    // borderColor:"red",
    // borderWidth:2,
    paddingLeft:20,


    fontSize: 12,
  },
  row: {
    flexDirection: "row",
    backgroundColor: "lightgray",
  },

  btn: {
    width: "50%",
    backgroundColor: "rgb(255, 177, 33)",
    borderRadius: 2,
    marginTop: 8,
    marginRight: "40%",
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
  },
});