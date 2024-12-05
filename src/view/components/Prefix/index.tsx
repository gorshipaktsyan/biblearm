import StyledPrefixComponents from "./styles";

interface PrefixProps {
  prefix?: string;
}
const { StyledPreFixBox, StyledPrefix } = StyledPrefixComponents;
export default function Prefix({ prefix }: PrefixProps) {
  if (!prefix) {
    return null;
  }
  return (
    <StyledPreFixBox>
      {prefix.split("/").map((e: string, index: number) => {
        return <StyledPrefix key={index}>{e}</StyledPrefix>;
      })}
    </StyledPreFixBox>
  );
}
