import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FooterStyledComponents from "./styles";

const [StyledContainer, StyledContent, StyledList, StyledGrid] =
  FooterStyledComponents;

export default function Footer({ setIsListView }) {
  return (
    <StyledContainer>
      <StyledContent>
        <StyledList onPress={() => setIsListView(true)}>
          <Ionicons name="list-outline" color="#000000" size={25} />
        </StyledList>
        <StyledGrid onPress={() => setIsListView(false)}>
          <Ionicons name="grid-outline" color="#000000" size={25} />
        </StyledGrid>
      </StyledContent>
    </StyledContainer>
  );
}
