import styled from "@emotion/styled";
import { Alert, Box, Fab } from "@mui/material";

const StyledComponents = {
  StyledContainer: styled(Box)({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  StyledVerseNumber: styled(Box)({
    fontWeight: "bold",
    marginRight: "5px",
  }),
  StyledFab: styled(Fab)({
    zIndex: 1000,
    position: "fixed",
    bottom: "30px",
    right: "30px",
    backgroundColor: "black",
    "&:hover": { backgroundColor: "black" },
  }),
  StyledAlert: styled(Alert)({
    width: "100%",
    marginTop: "50px",
  }),
};

export default StyledComponents;
