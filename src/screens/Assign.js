import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { windowHeight } from "../../src/utils/Dimensions";
import { windowWidth } from "../../src/utils/Dimensions";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";

import Users from "./Users";
import { Row, Table } from "react-native-table-component";
import Icon from "react-native-vector-icons/Feather";

const Assign = ({ navigation }) => {
  const [dataDevices, setDataDevices] = useState([]);
  const [checked, setChecked] = useState([]);
  const [price, setPrice] = useState([]);
  const [totalValue, setValue] = useState();

  const tableHead = ["Devices"];
  const data = [
    { deviceId: "001" },
    { deviceId: "002" },
    { deviceId: "003" },
    { deviceId: "004" },
    { deviceId: "005" },
    { deviceId: "006" },
    { deviceId: "007" },
    { deviceId: "008" },
    { deviceId: "009" },
    { deviceId: "010" },
    { deviceId: "011" },
    { deviceId: "012" },
    { deviceId: "013" },
    { deviceId: "014" },
    { deviceId: "015" },
  ];

  console.log(checked);

  // Return classes based on whether item is checked
  var isChecked = (item) => checked.includes(item);

  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  const onCHange = () => {
    setValue(checked.length * parseInt(price));
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.row} key={index}>
        <Icon
          name={isChecked(item.deviceId) ? "check" : "square"}
          size={30}
          color="orange"
          onPress={() => {
            const newIds = [...checked];
            const index = newIds.indexOf(item.deviceId);
            if (index > -1) {
              newIds.splice(index, 1);
            } else {
              newIds.push(item.deviceId);
            }
            setChecked(newIds);
          }}
          style={{ marginLeft: 15, color: "orange" }}
        />
        <Text style={styles.text}>{item.deviceId}</Text>
      </View>
    );
  };

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
            height: "15%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              marginTop: 20,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate(Users)}>
              <AntDesign name="back" size={30} color="#FFF" />
            </TouchableOpacity>
            <View
              style={{
                //width:'100%',
                marginTop: 5,
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
                Assign Devices
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            padding: 10,
            flexDirection: "row",
          }}
        >
          <TextInput
            value={price}
            onChangeText={setPrice}
            placeholder="Enter Price"
            keyboardType="numeric-pad"
            style={{
              backgroundColor: "white",
              width: "60%",
              borderColor: "#e8e8e8",
              borderWidth: 2,
              borderRadius: 6,
              paddingHorizontal: 10,
              marginVertical: 12,
            }}
          />
          <View
            style={{
              width: "30%",
              margin: 20,
            }}
          >
            <Button title="Assign" color="orange" onPress={onCHange} />
          </View>
        </View>
        <View style={{ height: "60%" }}>
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
            extraData={checked}
            keyExtractor={(item) => item.id}
            ListFooterComponent={<View />}
          />
          {/* </TouchableOpacity> */}
        </View>
        <View>
          <Text style={{ marginTop: 20, marginLeft: 20 }}>
            {`Items checked are: [${checkedItems}`}]
          </Text>
          <Text style={{ marginTop: 10, marginLeft: 20, fontWeight: "bold" }}>
            Total Price: {totalValue}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Assign;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 30,
  },
  head: {
    height: 70,
    backgroundColor: "#D9DDDC",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  headtext: {
    marginLeft: 4,
    marginRight: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  view: {
    height: 0,
  },
  text: {
    width: 75,
    margin: 8,
    marginLeft: 40,
    marginRight: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "lightgray",
    justifyContent: "center",
    marginTop: 10,
  },

  btn: {
    width: 60,
    height: 20,
    backgroundColor: "rgb(255, 177, 33)",
    borderRadius: 2,
    margin: 4,
    marginTop: 8,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
  },
});
