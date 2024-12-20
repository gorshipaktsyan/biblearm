import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import styled from "@emotion/styled";

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

const StyledSubjectTitle = styled("h4")({
  display: "flex",
  justifyContent: "center",
  margin: 0
});
const StyledSubject = styled("h4")({
  textAlign: "center",
  margin: "0 0 10px 0",
  fontWeight: "lighter"
});
