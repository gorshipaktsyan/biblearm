import { useEffect, useRef } from "react";
import { changeFontSize } from "../../redux/slice/settingsSlice";
import { AppDispatch } from "../../redux/store";
import { doubleTapConfig } from "../../config";

interface IUseDoubleTap {
  pathname: string;
  fontSize: number;
  dispatch: AppDispatch;
}

export default function useDoubleTap({
  pathname,
  fontSize,
  dispatch,
}: IUseDoubleTap): void {
  const lastClickTime = useRef(0); 

  useEffect(() => {
    if (pathname === "/settings") return;

    function handleClick(e: MouseEvent) {
      const newFontSize = doubleTap(e, fontSize);
      if (newFontSize !== fontSize) {
        dispatch(changeFontSize(newFontSize));
      }
    }

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [dispatch, fontSize, pathname]);

  function doubleTap(e: MouseEvent, fontSize: number): number {
    e.preventDefault();

    const currentTime = new Date().getTime();
    const timeDifference = currentTime - lastClickTime.current;

    if (timeDifference <= doubleTapConfig.doubleTapDelay) {
      lastClickTime.current = 0;

      return e.clientX < doubleTapConfig.clickedPlace
        ? Math.max(fontSize - 0.1, doubleTapConfig.minFontSize)
        : Math.min(fontSize + 0.1, doubleTapConfig.maxFontSize);
    } else {
      lastClickTime.current = currentTime;
      return fontSize;
    }
  }
}
