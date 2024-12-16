import styled from "@emotion/styled";
import { Box } from "@mui/material";

interface IListHeader {
  headerName: string;
}

export function ListHeader({ headerName }: IListHeader) {
  return <StyledListHeader>{headerName}</StyledListHeader>;
}

const StyledListHeader = styled(Box)({
  fontWeight: "bold",
  margin: "30px 0 15px 0",
});
