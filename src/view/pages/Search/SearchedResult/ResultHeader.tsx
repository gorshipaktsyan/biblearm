import { styled, Box, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

interface IResultHeader {
  totalVersesLength: number;
}

export default function ResultHeader({ totalVersesLength }: IResultHeader) {
  const { language } = useSelector((state: RootState) => state.settings);

  return (
    <>
      <StyledSearchResultHeader>
        {`${language.search.searchResult}(${totalVersesLength})`}
      </StyledSearchResultHeader>
      <Divider sx={{ width: "700px" }} />
    </>
  );
}

const StyledSearchResultHeader = styled(Box)({
  margin: "50px 0 5px 0",
});
