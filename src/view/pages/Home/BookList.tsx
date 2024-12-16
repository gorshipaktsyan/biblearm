import { IBook } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setCurrentBook } from "../../../redux/slice/booksSlice";
import { setCurrentVerses } from "../../../redux/slice/versesSlice";
import { ListComponent } from "../../components";
import { setCurrentChapter } from "../../../redux/slice/currentChapterSlice";

export function BookList() {
  const { books } = useSelector((state: RootState) => state.books);
  const { currentBook } = useSelector((state: RootState) => state.books);
  const language = useSelector((state: RootState) => state.settings.language);
  const dispatch = useDispatch();

  function onBookClick(book: IBook): void {
    dispatch(setCurrentBook(book));
    dispatch(setCurrentChapter(null));
    dispatch(setCurrentVerses([]));
  }

  return (
    <ListComponent<IBook>
      itemsArray={books}
      activeItem={currentBook}
      onItemClick={(book) => onBookClick(book)}
      renderItem={(book) => book.abbreviation}
      headerName={language.books.books}
    />
  );
}
