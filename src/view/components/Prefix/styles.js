import styled from "@emotion/styled";
import { Box } from "@mui/material";

const StyledPrefixComponents = {
  StyledPreFixBox: styled(Box)({
    textAlign: "center",
    marginVertical: 20,
    paddingHorizontal: 20,
    width: "100%",
    margin: "20px 0px",
  }),
  StyledPrefix: styled(Box)({
    textAlign: "center",
    fontSize: "12px",
  }),
};

export default StyledPrefixComponents;
