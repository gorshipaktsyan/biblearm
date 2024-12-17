import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../redux/store";
import { useEnterKeySubmit } from "../../../utils/hooks";

import { versesService } from "../../../services";
import { setFoundVerses } from "../../../redux/slice/searchSlice";
import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import ErrorSnackBar from "./SearchedResult/ErrorSnackBar";
import SearchedResultBox from "./SearchedResult";

export default function Search() {
  const [searchedText, setSearchedText] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);
  const { language } = useSelector((state: RootState) => state.settings);
  const { foundVerses } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  useEnterKeySubmit(handleSubmit);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (searchedText) {
      const foundVerses = versesService.searchAndGroupVerses(
        searchedText
        // language.regExp.onlyLetters
      );
      if (foundVerses.length > 0) {
        dispatch(setFoundVerses(foundVerses));
        return;
      }
    }
    setErrorAlert(true);
    setSearchedText("");
  }

  return (
    <>
      <StyledForm>
        <StyledTextField
          label={language.search.searchByVerse}
          value={searchedText}
          inputProps={{
            inputMode: "search",
          }}
          onChange={(e) => setSearchedText(e.target.value)}
        />
        <StyledSearchButton
          type="submit"
          variant="contained"
          onClick={handleSubmit}
        >
          <span style={{ fontSize: "16px" }}>{language.search.search}</span>
        </StyledSearchButton>
      </StyledForm>
      {foundVerses.length > 0 && <SearchedResultBox />}
      <ErrorSnackBar errorAlert={errorAlert} setErrorAlert={setErrorAlert} />
    </>
  );
}

const StyledSearchButton = styled(Button)({
  width: "50%",
  maxWidth: "150px",
  height: "50px",
  background: "black",
  marginTop: "20px",
  "&:hover": {
    background: "black",
  },
});
const StyledForm = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "50px",
});
const StyledTextField = styled(TextField)({
  width: "100%",
  maxWidth: "300px",
  marginTop: "10px",
  "& input": {
    WebkitAppearance: "none",
    margin: "0",
  },
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: "0",
  },
});
