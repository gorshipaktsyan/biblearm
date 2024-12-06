import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export default function BooksHeader() {
  const { language } = useSelector((state: RootState) => state.settings);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "15px",
      }}
    >
      <Box>{language.books.recoveryVersion}</Box>
      <Box>{language.books.books}</Box>
    </Box>
  );
}
