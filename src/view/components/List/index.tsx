import { Box } from "@mui/material";
import { IBook, IVerse } from "../../../types";
import StyledListComponents from "./styles";

interface IListComponent<T> {
  itemsArray: T[];
  activeItem: T | null;
  onItemClick: (item: T) => void;
  renderItem: (item: T) => React.ReactNode;
  headerName: string;
}

const { StyledList, StyledItem } = StyledListComponents;

export function ListComponent<T>({
  itemsArray,
  activeItem,
  onItemClick,
  renderItem,
  headerName,
}: IListComponent<T>) {
  return (
    <>
      <Box sx={{ fontWeight: "bold", margin: "30px 0 15px 0" }}>
        {headerName}
      </Box>
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
