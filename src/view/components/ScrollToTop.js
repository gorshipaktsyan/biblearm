import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop(currentChapter) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, currentChapter]);

  return null;
}

export default ScrollToTop;
