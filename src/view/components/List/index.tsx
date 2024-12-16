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
            sx={{ fontWeight: activeItem === item ? "bold" : "normal" }}
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
const StyledItem = styled(Box)({
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
});
