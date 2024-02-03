import styled from "@emotion/styled";
import { Box, HStack } from "native-base";
import { TouchableOpacity } from "react-native";

const FooterStyledComponents = {
  StyledContainer: styled(Box)({
    backgroundColor: "#fff",
    backgroundColor: "primary.900",
    shadow: "5",
  }),
  StyledContent: styled(HStack)({
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  }),
  StyledList: styled(TouchableOpacity)({
    marginRight: 20,
  }),
  StyledGrid: styled(TouchableOpacity)({
    marginLeft: 20,
  }),
};

export default FooterStyledComponents;
