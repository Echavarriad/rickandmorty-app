import React from "react";
import { View, Modal, Image, Text, Button } from "react-native";

export default function Mymodal({ children, isOpen, setisOpen }) {
  return (
    <View>
      <Modal visible={isOpen} transparent={true} animationType="slide">
        {children}
      </Modal>
    </View>
  );
}
