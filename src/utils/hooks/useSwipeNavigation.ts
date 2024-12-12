import { MouseEventHandler } from "react";
import {
  SwipeableHandlers,
  SwipeEventData,
  useSwipeable,
} from "react-swipeable";

import swipeConfig from "../../config/swipeConfig";
import { IBook } from "../../types";

import { useKeyboardNavigation } from "./useKeyboardClick";

export interface IUseSwipeNavigation {
  currentBook: IBook;
  currentChapter: number;
  navigate: (path: string) => void;
}
interface SwipeNavigationReturn {
  handleLeftSwipe: MouseEventHandler<HTMLElement>;
  handleRightSwipe: MouseEventHandler<HTMLElement>;
  handlers: SwipeableHandlers;
}

export default function useSwipeNavigation({
  currentBook,
  currentChapter,
  navigate,
}: IUseSwipeNavigation): SwipeNavigationReturn {
  function handleEvent(e: SwipeEventData | KeyboardEvent | MouseEvent): void {
    if ("stopPropagation" in e) {
      e.stopPropagation();
    }
  }

  function handleLeftSwipe(e: SwipeEventData | MouseEvent): void {
    handleEvent(e);
    if (currentChapter + 1 !== currentBook.chapters + 1) {
      navigate(`/chapter/${currentBook.code}/${currentChapter + 1}`);
    }
  }

  function handleRightSwipe(e: SwipeEventData | MouseEvent): void {
    handleEvent(e);

    if (currentChapter - 1! !== 0) {
      navigate(`/chapter/${currentBook.code}/${currentChapter - 1}`);
    }
    // if (currentHymns[0].number === 1) {
    //   navigate("/hymns/1");
    // }
  }

  function handleKeyboardLeftSwipe(e: KeyboardEvent) {
    handleLeftSwipe(e as unknown as SwipeEventData);
  }

  function handleKeyboardRightSwipe(e: KeyboardEvent) {
    handleRightSwipe(e as unknown as SwipeEventData);
  }

  useKeyboardNavigation({
    handleLeftSwipe: handleKeyboardLeftSwipe,
    handleRightSwipe: handleKeyboardRightSwipe,
  });

  const handlers: SwipeableHandlers = useSwipeable({
    onSwipedLeft: handleLeftSwipe,
    onSwipedRight: handleRightSwipe,
    ...swipeConfig,
  });

  return {
    handleLeftSwipe:
      handleLeftSwipe as unknown as MouseEventHandler<HTMLElement>,
    handleRightSwipe:
      handleRightSwipe as unknown as MouseEventHandler<HTMLElement>,
    handlers,
  };
}
