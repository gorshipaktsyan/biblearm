import StyledSubjectComponents from "./styles";

const { StyledSubjectTitle, StyledSubject } = StyledSubjectComponents;

export default function Subject({ subject }) {
  return (
    <>
      <StyledSubjectTitle>Թեմա՝</StyledSubjectTitle>
      <StyledSubject>{subject}</StyledSubject>
    </>
  );
}
