import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";
import { Table, Row } from "react-native-table-component";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import Invoice1 from "../screens/Invoice1";
import { Image } from "react-native";

const Approve = ({ setClicked, window }) => {
  const tableHead = ["UserId", "Amount", "ScreenShot", "Action"];
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [itemInfo, setItemInfo] = useState("");
  const [itemInfoId, setItemInfoId] = useState("");
  const [itemKey, setItemKey] = useState();
  const [itemAmpount, setItemAmount] = useState("");
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
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
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
        <TouchableOpacity
          onPress={() => {
            setItemInfo(item.img);
            setItemKey(index);
            setShow(true);
            setItemInfoId(item.userId);
            setItemAmount(item.amount);
            setItemCreationDate(item.creationDate);
            setItemNoOfDevices(item.noOfDevices);
            setItemStatus(item.status);
            setItemName(item.username);
          }}
        >
          <View
            style={{
              alignItems: "center",
              height: 20,
              width: 20,
              marginLeft: "12%",
              marginBottom: "40%",
            }}
          >
            <Image
              source={{ uri: item.img }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                resizeMode: "contain",
                margin: 8,
              }}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.status}>{item.status}</Text>

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
        <Modal transparent={true} visible={show} key={setItemKey}>
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
                marginTop: 80,
                marginBottom: 80,
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

              <View
                style={{
                  marginTop: 10,
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                }}
              >
                {itemInfo && (
                  <Image
                    source={{ uri: itemInfo }}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                )}
              </View>
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
    justifyContent: "space-between",
  },

  headtext: {
    width: windowWidth - 600,
    marginLeft: 4,
    marginRight: 20,
  },
  view: {
    height: 0,
  },
  text: {
    width: windowWidth - 600,
    marginTop: 8,
    marginLeft: 4,
    marginRight: 20,
    fontSize: 12,
  },
  status: {
    width: windowWidth - 600,
    marginTop: 8,
    marginLeft: 4,
    marginRight: "10%",
    fontSize: 12,
    color:"green"
  },
  row: {
    flexDirection: "row",
    backgroundColor: "lightgray",
    justifyContent: "space-between",
    marginLeft: 20,
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