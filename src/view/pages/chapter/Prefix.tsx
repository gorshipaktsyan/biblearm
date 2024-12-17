import styled from "@emotion/styled";
import { Box } from "@mui/material";

interface PrefixProps {
  prefix: string;
}

export default function Prefix({ prefix }: PrefixProps) {
  return (
    <StyledPreFixBox>
      {prefix.split("/").map((e: string, index: number) => {
        return <StyledPrefix key={index}>{e}</StyledPrefix>;
      })}
    </StyledPreFixBox>
  );
}

const StyledPreFixBox = styled(Box)({
  textAlign: "center",
  width: "100%",
  margin: "10px 0 10px 0"
});
const StyledPrefix = styled(Box)({
  textAlign: "center",
  fontSize: "14px",
});
