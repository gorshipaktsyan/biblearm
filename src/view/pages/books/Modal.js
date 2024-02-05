import { Modal } from "@mui/material";
import BooksStyledComponents from "./styles";

const { StyledModal, StyledModalItem } = BooksStyledComponents;

export default function BookModal({
  chapters,
  isOpen,
  setIsOpen,
  handleChapterClick,
}) {
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <StyledModal>
        {[...Array(chapters + 1).keys()]
          .filter((el) => el !== 0)
          .map((chapter) => {
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
