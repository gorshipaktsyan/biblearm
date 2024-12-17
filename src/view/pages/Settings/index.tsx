import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Divider, Slider, styled, Switch } from "@mui/material";

import {
  changeFontSize,
  setIsAllowToUseArrows,
  toggleNightShift,
} from "../../../redux/slice/settingsSlice";
import { RootState } from "../../../redux/store";

import SettingsStyledComponents from "./styles";

const { StyledSetList, StyledSetListItem, StyledSetTpg } =
  SettingsStyledComponents;

export default function Settings() {
  const settings = useSelector((state: RootState) => state.settings);

  const dispatch = useDispatch();

  function handleChangeFontSize(e: Event, value: number | number[]): void {
    if (typeof value === "number") {
      dispatch(changeFontSize(value));
    }
  }

  function handleChangeArrows(e: ChangeEvent<HTMLInputElement>): void {
    dispatch(setIsAllowToUseArrows(e.target.checked));
  }
  function handleToggleNightShift(): void {
    dispatch(toggleNightShift());
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
          <Switch
            checked={settings.isNightShiftEnabled}
            onChange={handleToggleNightShift}
          />
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
