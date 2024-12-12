import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styled from "@emotion/styled";
import { Fab } from "@mui/material";

export default function ArrowBackIconComponent() {
  const navigate = useNavigate();
  return (
    <StyledFab onClick={() => navigate("/")}>
      <ArrowBackIcon
        sx={{
          color: "white",
        }}
      />
    </StyledFab>
  );
}

const StyledFab = styled(Fab)({
  zIndex: 1000,
  position: "fixed",
  bottom: "30px",
  right: "30px",
  backgroundColor: "black",
  "&:hover": { cursor: "pointer", backgroundColor: "black" },
});
