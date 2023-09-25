import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { TouchableOpacity } from "react-native-web";
import Mymodal from "../componen/Mymodal";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

function Info() {
  const [data, setData] = useState([]);
  const [index, setIndex] = React.useState(0);
  const [isOpen, setisOpen] = useState(false);
  const [image, setImage] = useState("");
  const [name, setname] = useState("");
  const [status, setstatus] = useState("");
  const [species, setspecies] = useState("");
  const [gender, setgender] = useState("");
  const [origin, setorigin] = useState("");
  const [isRender, setisRender] = useState("");

  const show = (item) => {
    setisOpen(!isOpen);
    setImage(item.image);
    setname(item.name);
    setstatus(item.status);
    setspecies(item.species);
    setgender(item.gender);
    setorigin(item.origin.name);
  };

  useEffect(() => {
    const getcharacters = async () => {
      const results = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );

      setData(results.data.results);
    };

    getcharacters();
  }, []);
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          return (
            <View key={index}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.header}>{item.name}</Text>
              <Text style={styles.header}>{item.species}</Text>
              <View>
                <Button title="show more" onPress={() => show(item)} />
              </View>
            </View>
          );
        }}
        extraData={isRender}
      />
      <Mymodal isOpen={isOpen} setisOpen={setisOpen}>
        <View style={styles.modal}>
          <View style={styles.contentModal}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.header}>{name}</Text>
            <Text style={styles.header}>{status}</Text>
            <Text style={styles.header}>{species}</Text>
            <Text style={styles.header}>{gender}</Text>
            <Text style={styles.header}>{origin}</Text>
            <Button title="Back" onPress={() => setisOpen(!setisOpen)} />
          </View>
        </View>
      </Mymodal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentModal: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Info;
