import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Table, Row } from "react-native-table-component";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

import Invoice1 from "../screens/Invoice1";

const InvoiceTable = ({ setClicked, data }) => {
  const tableHead = ["Invoice#", "Status", "Amount", "Action"];
  const navigation = useNavigation();

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.row} key={index}>
        <Text style={styles.text}>{item.Invoice_No}</Text>
        <Text style={styles.text}>{item.status}</Text>
        <Text style={styles.text}>{item.Amount}</Text>
        <View style={{ width: "20%", marginLeft: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate(Invoice1)}>
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
            Invoice
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
      }}
    >
      <View style={styles.container}>
        <View
          onStartShouldSetResponder={() => {
            setClicked(false);
          }}
        >
          {/* <TouchableOpacity onPress={() => navigation.navigate("User1")}> */}
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
          {/* </TouchableOpacity> */}
        </View>
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
    width: "25%",
    marginTop: 8,
    textAlign: "center",
    fontSize: 12,
  },
  row: {
    flexDirection: "row",
    backgroundColor: "lightgray",
    // justifyContent: "space-between",
    marginLeft: 4,
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

export default InvoiceTable;