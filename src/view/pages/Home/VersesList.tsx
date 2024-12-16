import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { IVerse } from "../../../types";
import { useNavigate } from "react-router-dom";
import { ListComponent } from "../../components";
import { setClickedVerse } from "../../../redux/slice/versesSlice";

export default function VersesList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentVerses } = useSelector((state: RootState) => state.verses);
  const { currentChapter } = useSelector(
    (state: RootState) => state.currentChapter
  );
  const { currentBook } = useSelector((state: RootState) => state.books);
  const { language } = useSelector((state: RootState) => state.settings);

  function onVersesNumberClick(verse: IVerse) {
    dispatch(setClickedVerse(verse.number));
    navigate(`/chapter/${currentBook!.code}/${currentChapter}`);
  }

  return (
    <>
      <ListComponent<IVerse>
        itemsArray={currentVerses}
        activeItem={null}
        onItemClick={onVersesNumberClick}
        renderItem={(verse) => verse.number}
        headerName={language.books.verses}
      />
    </>
  );
}
