import { useState } from "react";

import { AppBar, Snackbar } from "@mui/material";

import StyledComponents from "../../styles";

import ToolBar from "./ToolBar";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const { StyledAlert } = StyledComponents;

function AppBarComponent() {
  const [copyAlert, setCopyAlert] = useState(false);
  const { language } = useSelector((state: RootState) => state.settings);
  return (
    <>
      <AppBar
        position="fixed"
        component="nav"
        sx={{
          backgroundColor: "black",
          zIndex: 1300,
        }}
      >
        <ToolBar setCopyAlert={setCopyAlert} />
      </AppBar>
      {copyAlert && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={copyAlert}
          onClose={() => setCopyAlert(false)}
          autoHideDuration={2000}
        >
          <StyledAlert>{language.appBar.copyAlert}</StyledAlert>
        </Snackbar>
      )}
    </>
  );
}

export default AppBarComponent;
