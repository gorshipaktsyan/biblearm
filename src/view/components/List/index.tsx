import { ListHeader } from "./ListHeader";
import styled from "@emotion/styled";
import { Box, List, ListItem } from "@mui/material";
interface IListComponent<T> {
  itemsArray: T[];
  activeItem: T | null;
  onItemClick: (item: T) => void;
  renderItem: (item: T) => React.ReactNode;
  headerName: string;
}

export default function ListComponent<T>({
  itemsArray,
  activeItem,
  onItemClick,
  renderItem,
  headerName,
}: IListComponent<T>) {
  return (
    <>
      <ListHeader headerName={headerName} />
      <StyledList>
        {itemsArray.map((item, index) => (
          <StyledItem
            key={index}
            onClick={() => onItemClick(item)}
            active={activeItem === item}
          >
            {renderItem(item)}
          </StyledItem>
        ))}
      </StyledList>
    </>
  );
}

const StyledList = styled(List)({
  maxWidth: "700px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  gap: "10px",
  width: "100%",
});

const StyledItem = styled(ListItem)<{ active: boolean }>(
  ({ theme, active }) => ({
    width: "calc(12.5% - 10px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: active ? "bold" : "normal",
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor: theme.palette.mode === "light" ? "#f0f0dc" : "#333333",
      cursor: "pointer",
    },
  })
);
