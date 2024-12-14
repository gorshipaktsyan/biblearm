import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { IVerse } from "../../../types";
import { useNavigate } from "react-router-dom";
import { setAppBarTitle } from "../../../redux/slice/appBarSlice";
import setTitle from "../../../utils/setTitle";
import { ListComponent } from "../../components/List";
import { setClickedVerse } from "../../../redux/slice/versesSlice";

export default function VersesList() {
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state.settings);
  const currentVerses = useSelector(
    (state: RootState) => state.verses.currentVerses
  );
  const currentBook = useSelector(
    (state: RootState) => state.books.currentBook
  );
  const currentChapter = useSelector(
    (state: RootState) => state.currentChapter.currentChapter
  );
  const navigate = useNavigate();
  function onVersesNumberClick(verse: IVerse) {
    const title = setTitle({
      currentBook,
      currentChapter,
      pathname: `/chapter`,
      lg: language,
    });
    dispatch(setAppBarTitle(title));
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
