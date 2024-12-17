import { Snackbar } from "@mui/material";
import StyledComponents from "../../../styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

interface IErrorSnackBar {
  errorAlert: boolean;
  setErrorAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const { StyledAlert } = StyledComponents;

export default function ErrorSnackBar({
  errorAlert,
  setErrorAlert,
}: IErrorSnackBar) {
  const { language } = useSelector((state: RootState) => state.settings);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={errorAlert}
      onClose={() => setErrorAlert(false)}
      autoHideDuration={2000}
    >
      <StyledAlert onClose={() => setErrorAlert(false)} severity="error">
        {language.search.errorAlert}
      </StyledAlert>
    </Snackbar>
  );
}
