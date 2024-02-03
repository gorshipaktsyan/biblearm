import React from "react";
import { Text } from "native-base";

const [StyledPrefix, StyledPrefixText] = HeaderStyledComponents;

export default function Prefix({ prefix, color }) {
  if (!prefix) {
    return null;
  }
  return (
    <StyledPrefix>
      {prefix.split("/").map((e) => {
        return <StyledPrefixText>{e}</StyledPrefixText>;
      })}
    </StyledPrefix>
  );
}
