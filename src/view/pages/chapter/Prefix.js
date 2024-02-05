import { Box } from "@mui/material";
import React from "react";

export default function Prefix({ prefix }) {
  if (!prefix) {
    return null;
  }
  return (
    <Box
      sx={{
        textAlign: "center",
        marginVertical: 20,
        paddingHorizontal: 20,
        width: "100%",
        margin: "20px 0px",
      }}
    >
      {prefix.split("/").map((e, index) => {
        return (
          <Box key={index} sx={{ textAlign: "center", fontSize: "12px" }}>
            {e}
          </Box>
        );
      })}
    </Box>
  );
}
