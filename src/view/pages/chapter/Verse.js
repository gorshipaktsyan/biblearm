import React from "react";
import { View } from "react-native";
import { Text } from "native-base";
import HeaderStyledComponents from "./styles";

const [StyledVerse] = HeaderStyledComponents;

export default function Verse({ verse }) {
  return (
    <StyledVerse>
      <View style={{ marginHorizontal: 5 }}>
        <Text style={{ color: "#000" }}>{verse.number}</Text>
      </View>
      <View style={{ paddingRight: 25 }}>
        <Text style={{ fontSize: 14, color: "#000" }}>{verse.verse}</Text>
      </View>
    </StyledVerse>
  );
}
