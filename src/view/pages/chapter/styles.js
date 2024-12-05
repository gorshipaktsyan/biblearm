import styled from "@emotion/styled";
import { Fab } from "@mui/material";
import { Box } from "@mui/system";

const ChapterStyledComponents = {
  StyledContainer: styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgb(253, 253, 232)",
  }),
  StyledChapter: styled(Box)({
    width: "400px",
    display: "flex",
    flexDirection: "column",
    marginTop: "15px",
    marginBottom: "50px",
  }),
 
  StyledHeader: styled(Box)({
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    fontWeight: "bold",
  }),
  StyledFab: styled(Fab)({
    zIndex: 1000,
    position: "fixed",
    bottom: "30px",
    right: "30px",
    backgroundColor: "black",
    "&:hover": { cursor: "pointer", backgroundColor: "black" },
  }),
};
export default ChapterStyledComponents;
