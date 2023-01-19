import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import React from "react";
import { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import Home from "./Home";
import { Row, Rows, Table } from "react-native-table-component";
import Invoice from "./Invoice";

const Invoice1 = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const nav = useNavigation();

  const state = {
    tableHead: ["DeviceID", "Amount"],
    tableData: [
      ["1", "2"],
      ["a", "b"],
      ["1", "2"],
    ],
    total: [["Subtotal"], ["$126"]],
  };

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
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
            <TouchableOpacity onPress={() => navigation.navigate(Invoice)}>
              <AntDesign name="back" size={30} color="white" />
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
                  fontSize: 28,
                  color: "#FFF",
                  fontWeight: "bold",
                }}
              >
                Invoice
              </Text>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: "white", margin: 20, padding: 20 }}>
          <View style={{ marginBottom: 30 }}>
            <Text>Invoice #820</Text>
            <Text>Creation Date</Text>
          </View>
          <View style={{ marginBottom: 30 }}>
            <Text style={{ fontWeight: "bold" }}>Customer: </Text>
            <Text>VendorId</Text>
            <Text>Vendor Name</Text>
          </View>
          <View style={{ marginBottom: 30 }}>
            <Text>We appreciate your business. </Text>
          </View>
          <Table
            style={{
              marginBottom: 20,
            }}
          >
            <Row
              data={state.tableHead}
              style={{ marginBottom: 10 }}
              textStyle={{ fontWeight: "bold" }}
            />
            <Rows data={state.tableData} />
            <View
              style={{
                borderBottomWidth: 1,
                marginTop: 10,
                marginBottom: 10,
                borderBottomColor: "gray",
              }}
            ></View>
            <Row data={state.total} textStyle={{ fontWeight: "bold" }} />
          </Table>
        </View>
        <View
          style={{
            margin: 20,
            flex: 1,
            flexDirection: "row",
            height: 2,
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity onPress={() => setShow(true)}>
            <Text
              style={{
                backgroundColor: "orange",
                width: 100,
                height: 40,
                textAlign: "center",
                paddingTop: 10,
                color: "white",
                borderRadius: 5,
              }}
            >
              Pay
            </Text>
          </TouchableOpacity>
          <Modal transparent={true} visible={show}>
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
                  marginTop: 120,
                  marginBottom: 120,
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

                <View style={{ alignItems: "center" }}>
                  <Text style={{ fontSize: 25, marginTop: 5 }}>
                    Account Information
                  </Text>
                </View>

                <View>
                  <Text style={{ fontSize: 20, marginTop: 20 }}>
                    Bank Account
                  </Text>
                  <Text style={{ fontSize: 10 }}>Account Name</Text>
                  <Text style={{ fontSize: 10 }}>Account Number</Text>
                </View>

                <View>
                  <Text style={{ fontSize: 20, marginTop: 20 }}>
                    EasyPaisa Account
                  </Text>
                  <Text style={{ fontSize: 10 }}>Account Name</Text>
                  <Text style={{ fontSize: 10 }}>Account Number</Text>
                </View>

                <View>
                  <Text style={{ fontSize: 20, marginTop: 20 }}>
                    JazzCash Account
                  </Text>
                  <Text style={{ fontSize: 10 }}>Account Name</Text>
                  <Text style={{ fontSize: 10 }}>Account Number</Text>
                </View>
                {image != null ? (
                  <View
                    style={{
                      marginTop: 10,
                      flex: 1,
                      alignItems: "center",
                      borderRadius: 5,
                      marginBottom: 60,
                    }}
                  >
                    {image && (
                      <Image
                        source={{ uri: image }}
                        style={{
                          width: 100,
                          height: 100,
                        }}
                      />
                    )}
                  </View>
                ) : (
                  <View
                    style={{
                      width: "100%",
                      height: "20%",
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 60,
                      // borderColor: "red",
                      // borderWidth: 2,
                    }}
                  >
                    <View
                      style={{
                        width: "20%",
                        flex: 1,
                        marginBottom: 30,
                        marginTop: 30,
                        justifyContent: "center",
                        alignItems: "center",
                        // borderColor: "grey",
                        // borderStyle:"dashed",
                        // borderWidth: 1,
                      }}
                    >
                      <Text>No image</Text>
                    </View>
                  </View>
                )}
                <TouchableOpacity
                  onPress={pickImage}
                  style={{ flex: 1, alignItems: "center" }}
                >
                  <Text
                    style={{
                      backgroundColor: "orange",
                      width: 100,
                      height: 40,
                      textAlign: "center",
                      paddingTop: 10,
                      color: "white",
                      borderRadius: 3,
                    }}
                  >
                    Choose image
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
                  <Text
                    style={{
                      backgroundColor: "orange",
                      width: 100,
                      height: 40,
                      textAlign: "center",
                      paddingTop: 10,
                      color: "white",
                      borderRadius: 3,
                    }}
                  >
                    Upload
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Invoice1;
