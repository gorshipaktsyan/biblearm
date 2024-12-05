import { Modal } from "@mui/material";
import BooksStyledComponents from "./styles";

interface BookModalProps {
  chapters: number[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleChapterClick: (chapter: number) => void;
}

const { StyledModal, StyledModalItem } = BooksStyledComponents;

export default function BookModal({
  chapters,
  isOpen,
  setIsOpen,
  handleChapterClick,
}: BookModalProps): JSX.Element {
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <StyledModal>
        {chapters
          .filter((el) => el !== 0)
          .map((chapter: number) => {
            return (
              <StyledModalItem
                key={chapter}
                onClick={() => handleChapterClick(chapter)}
              >
                {chapter}
              </StyledModalItem>
            );
          })}
      </StyledModal>
    </Modal>
  );
}
