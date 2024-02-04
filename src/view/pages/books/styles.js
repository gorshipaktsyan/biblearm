import styled from "@emotion/styled";
import { Box } from "@mui/system";

const BooksStyledComponents = {
  StyledContainer: styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: 15,
  }),
  StyledList: styled(Box)({
    maxWidth: "400px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
  }),
  StyledItem: styled(Box)({
    padding: "10px 5px",
    fontSize: "20px",
    width: "80px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#f0f0dc",
      cursor: "pointer",
    },
  }),
};
export default BooksStyledComponents;
