import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { windowHeight, windowWidth } from "../utils/Dimensions";

export default class PayInfoTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["S.No", "Bank Name", "Account Name", "Account Number"],
      tableData: [
        ["1", "HBL", "Al - Hood Gas", "00xxxxxxxxxx00"],
        ["2", "EasyPaisa", "Al - Hood Gas", "00xxxxxxxxxx00"],
        ["3", "JazzCash", "Al - Hood Gas", "00xxxxxxxxxx00"],
      ],
    };
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.text}>
          <Text style={styles.text}></Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View
        style={{
          height: windowHeight,
          width: windowWidth,
        }}
      >
        <View style={styles.container}>
          <Table borderStyle={{ borderColor: "transparent", borderWidth: 1 }}>
            <Row
              data={state.tableHead}
              style={styles.head}
              textStyle={styles.headText}
            />
            {state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {rowData.map((cellData, cellIndex) => (
                  <Cell
                    key={cellIndex}
                    data={cellIndex === 4 ? element(cellData, index) : cellData}
                    textStyle={styles.text}
                  />
                ))}
              </TableWrapper>
            ))}
          </Table>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
  },
  head: {
    height: 70,
    backgroundColor: "#D9DDDC",
  },
 
  text: {
    margin: 8,
    fontSize: 12,
  },
  row: {
    flexDirection: "row",
    backgroundColor: "lightgray",
  },
  btn: {
    width: 60,
    height: 20,
    backgroundColor: "#78B7BB",
    borderRadius: 2,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
  },
});
