import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

interface ISubject {
  subject: string;
}
export default function Subject({ subject }: ISubject) {
  const language = useSelector((state: RootState) => state.settings.language);
  return (
    <>
      <StyledSubjectTitle>{language.chapter.subjectTitle}</StyledSubjectTitle>
      <StyledSubject>{subject}</StyledSubject>
    </>
  );
}

const StyledSubjectTitle = styled(Box)({
  display: "flex",
  justifyContent: "center",
  fontWeight: "bold",
});
const StyledSubject = styled(Box)({
  textAlign: "center",
  marginBottom: "10px",
});
