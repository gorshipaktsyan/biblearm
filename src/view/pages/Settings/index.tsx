import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  List,
  ListItem,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slider,
  styled,
} from "@mui/material";

import {
  changeFontSize,
  setNightShiftMode,
  TThemeState,
} from "../../../redux/slice/settingsSlice";
import { RootState } from "../../../redux/store";

export default function Settings() {
  const settings = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();

  function handleChangeFontSize(e: Event, value: number | number[]): void {
    if (typeof value === "number") {
      dispatch(changeFontSize(value));
    }
  }
  function handleNightShiftModeChange(
    event: SelectChangeEvent<"light" | "dark" | "system">
  ): void {
    dispatch(setNightShiftMode(event.target.value as TThemeState));
  }
  return (
    <StyledBox onTouchStart={(e) => e.stopPropagation()}>
      <StyledSetList>
        <StyledSetListItem>
          <StyledSetTpg>{settings.language.settings.fontSize}</StyledSetTpg>
          <Slider
            aria-label="Font size"
            value={settings.fontSize && settings.fontSize}
            onChange={handleChangeFontSize}
            step={0.1}
            marks
            min={1}
            max={1.8}
          />
        </StyledSetListItem>
        <StyledSetListItem>
          <StyledSetTpg>{settings.language.settings.nightMode}</StyledSetTpg>
          <Select
            sx={{ width: "120px", height: "40px" }}
            value={settings.nightShiftMode}
            onChange={handleNightShiftModeChange}
            displayEmpty
          >
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="system">System</MenuItem>
          </Select>
        </StyledSetListItem>
      </StyledSetList>
    </StyledBox>
  );
}

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
});
const StyledSetList = styled(List)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  paddingBottom: "100px",
  maxWidth: "700px",
});
const StyledSetListItem = styled(ListItem)({
  flexDirection: "column",
  width: "100%",
});
const StyledSetTpg = styled(Box)({
  "&:hover": { cursor: "default" },
  marginBottom: "10px",
});
