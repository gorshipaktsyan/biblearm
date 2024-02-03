import styled from "@emotion/styled";
import { Box, HStack } from "native-base";

const HeaderStyledComponents = {
  StyledContainer: styled(Box)({
    backgroundColor: "#fff",
    backgroundColor: "primary.900",
    shadow: 2,
  }),
  StyledContent: styled(HStack)({
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  }),
  StyledLeftArrow: styled("")({
    position: "absolute",
    left: 20,
    bottom: 60,
    backgroundColor: "red",
  }),
  StyledRightArrow: styled("")({
    position: "absolute",
    right: 20,
    bottom: 60,
    zIndex: 100,
    backgroundColor: "red",
    height: 35,
    width: 35,
  }),
};

export default HeaderStyledComponents;
