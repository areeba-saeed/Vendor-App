import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";
import { Table, Row } from "react-native-table-component";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

const Approve = ({ setClicked, window }) => {
  const tableHead = ["UserId", "Amount", "Status", "Details"];
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [itemInfoId, setItemInfoId] = useState("");
  const [itemKey, setItemKey] = useState();
  const [itemStatus, setItemStatus] = useState("");
  const [itemCreationDate, setItemCreationDate] = useState("");
  const [itemNoOfDevices, setItemNoOfDevices] = useState("");
  const [itemName, setItemName] = useState("");
  // Temporary data
  const data = [
    {
      userId: "01",
      username: "Areeba",
      status: "Completed",
      creationDate: "2/1/2023",
      amount: "200",
      noOfDevices: "2",
      View: "View",
      //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      userId: "02",
      username: "Areeba",
      status: "Completed",
      creationDate: "2/1/2023",
      amount: "200",
      noOfDevices: "2",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      userId: "03",
      username: "Areeba",
      status: "Completed",
      creationDate: "2/1/2023",
      amount: "200",
      noOfDevices: "2",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      userId: "04",
      username: "Areeba",
      status: "Completed",
      creationDate: "2/1/2023",
      amount: "200",
      noOfDevices: "2",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      userId: "05",
      username: "Areeba",
      status: "Completed",
      creationDate: "2/1/2023",
      amount: "200",
      noOfDevices: "2",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      userId: "06",
      username: "Areeba",
      status: "Completed",
      creationDate: "2/1/2023",
      amount: "200",
      noOfDevices: "2",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      userId: "07",
      username: "Areeba",
      status: "Completed",
      creationDate: "2/1/2023",
      amount: "200",
      noOfDevices: "2",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      userId: "08",
      username: "Areeba",
      status: "Completed",
      creationDate: "2/1/2023",
      amount: "200",
      noOfDevices: "2",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.row} key={index}>
        <Text style={styles.text}>{item.userId}</Text>
        <Text style={styles.text}>{item.amount}</Text>
        <Text style={styles.status}>{item.status}</Text>

        <View style={{ width: "20%", marginLeft: 20 }}>
          <TouchableOpacity
            onPress={() => {
              setItemKey(index);
              setShow(true);
              setItemInfoId(item.userId);
              setItemCreationDate(item.creationDate);
              setItemNoOfDevices(item.noOfDevices);
              setItemStatus(item.status);
              setItemName(item.username);
            }}
          >
            <Text
              style={{
                backgroundColor: "orange",
                textAlign: "center",
                fontSize: 12,
                padding: 5,
                color: "white",
                borderRadius: 5,
                marginTop: 5,
              }}
            >
              View
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        height: window,
        width: windowWidth,
      }}
    >
      <View style={styles.container}>
        <View
          onStartShouldSetResponder={() => {
            setClicked(false);
          }}
        >
          <FlatList
            stickyHeaderIndices={[0]}
            ListHeaderComponent={
              <Table borderStyle={{ borderColor: "transparent" }}>
                <Row
                  data={tableHead}
                  style={styles.head}
                  textStyle={styles.headtext}
                />
              </Table>
            }
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListFooterComponent={<View />}
          />
        </View>
        <Modal transparent={true} visible={show} key={itemKey}>
          <View
            style={{
              backgroundColor: "#000000aa",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                marginLeft: 30,
                marginRight: 30,
                flex: 1,
                // justifyContent: "center",
                marginTop: 180,
                marginBottom: "65%",
                justifyContent: "center",
                padding: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  top: 10,
                  right: 10,
                  position: "absolute",
                }}
                onPress={() => {
                  setShow(false);
                }}
              >
                X
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 20,
                }}
                onPress={() => {
                  setShow(false);
                }}
              >
                {itemInfoId}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                }}
                onPress={() => {
                  setShow(false);
                }}
              >
                {itemName}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                }}
                onPress={() => {
                  setShow(false);
                }}
              >
                {itemNoOfDevices}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                }}
                onPress={() => {
                  setShow(false);
                }}
              >
                {itemCreationDate}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "green",
                }}
                onPress={() => {
                  setShow(false);
                }}
              >
                {itemStatus}
              </Text>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
  },
  head: {
    height: 70,
    backgroundColor: "#D9DDDC",
    flexDirection: "row",
    // justifyContent: "space-between",
  },

  headtext: {
    // borderColor:"red",
    // borderWidth:2,
    width: "100%",
    textAlign: "center",
  },
  view: {
    height: 0,
  },
  text: {
    // borderColor: "red",
    // borderWidth: 2,
    width: "25%",
    textAlign: "center",
    marginTop: 8,
    fontSize: 12,
  },
  status: {
    width: "25%",
    marginTop: 8,
    fontSize: 12,
    textAlign: "center",
    color: "green",
    // borderColor: "red",
    // borderWidth: 2,
  },
  row: {
    flexDirection: "row",
    backgroundColor: "lightgray",
    // justifyContent: "space-between",
  },

  icon: {
    marginLeft: 30,
  },
  icons: {
    marginTop: 8,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Approve;