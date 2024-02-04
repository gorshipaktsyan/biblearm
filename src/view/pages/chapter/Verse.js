import React from "react";
import {Box} from "@mui/material";

export default function Verse({ verse }) {
  return (
    <Box>
      <Box >
        <span style={{ color: "#000" }}>{verse?.number}</span>
      </Box>
      <Box style={{ paddingRight: 25 }}>
        <span style={{ fontSize: 14, color: "#000" }}>{verse?.verse}</span>
      </Box>
    </Box>
  );
}
