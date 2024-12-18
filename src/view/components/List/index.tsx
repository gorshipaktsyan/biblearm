import { ListHeader } from "./ListHeader";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
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

const StyledList = styled(Box)({
  maxWidth: "700px",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  width: "100%",
});

const StyledItem = styled(Box)<{ active: boolean }>(({ theme, active }) => ({
  padding: "10px 5px",
  fontSize: "20px",
  width: "80px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: active ? "bold" : "normal",

  "&:hover": {
    backgroundColor: theme.palette.mode === "light" ? "#f0f0dc" : "#333333",
    cursor: "pointer",
  },
}));
