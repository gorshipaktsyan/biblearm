import styled from "@emotion/styled";
import { Box } from "@mui/material";

const StyledVerseComponents = {
  StyledVerse: styled(Box)({
    maxWidth: "400px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  }),
  StyledVerseNumber: styled(Box)({
    fontWeight: "bold",
    marginRight: "5px",
  }),
};

export default StyledVerseComponents;
