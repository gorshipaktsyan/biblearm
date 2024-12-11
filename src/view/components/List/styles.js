import styled from "@emotion/styled";
import { Box } from "@mui/system";

const StyledListComponents = {
  StyledListHeader: styled(Box)({}),
  StyledList: styled(Box)({
    maxWidth: "700px",
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
    alignItems: "center",

    "&:hover": {
      backgroundColor: "#f0f0dc",
      cursor: "pointer",
    },
  }),
};
export default StyledListComponents;
