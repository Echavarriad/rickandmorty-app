import React, { useState, useEffect } from "react";
import { Button, SafeAreaView, StyleSheet } from "react-native";
import CarouselCards from "../componen/CarouselCards";

export default function Home({ navigation }) {
  console.log(CarouselCards);
  return (
    <SafeAreaView style={styles.container}>
      <CarouselCards />
      <Button
        title="show more"
        onPress={() => {
          navigation.navigate("Info");
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
});
