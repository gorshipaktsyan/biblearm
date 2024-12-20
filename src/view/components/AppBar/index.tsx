import { useState } from "react";

import { AppBar, Snackbar, styled, Toolbar } from "@mui/material";

import StyledComponents from "../../styles";

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import IconBox from "./IconBox";
import { useLocation } from "react-router-dom";
import { copyToClipboard } from "../../../utils";

const { StyledAlert } = StyledComponents;

function AppBarComponent() {
  const [copyAlert, setCopyAlert] = useState(false);
  const { language } = useSelector((state: RootState) => state.settings);
  const { title } = useSelector((state: RootState) => state.appBar);
  const { pathname } = useLocation();

  function handleTitleClick() {
    if (pathname.includes(`/chapter`)) {
      copyToClipboard(window.location.href);
      setCopyAlert(true);
    }
  }

  return (
    <>
      <StyledAppBar position="fixed">
        <Toolbar>
          <StyledTitle onClick={handleTitleClick}>{title}</StyledTitle>
          <IconBox />
        </Toolbar>
      </StyledAppBar>
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

const StyledAppBar = styled(AppBar)({
  backgroundColor: "black",
  zIndex: 1300,
});
const StyledTitle = styled("h3")({
  cursor: "pointer",
  color: "#F5EB5B",
  margin: 0,
});
