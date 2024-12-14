export function scrollToVerse(verseNumber: number) {
  const verseElement = document.getElementById(`verse-${verseNumber}`);
  if (verseElement) {
    verseElement.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
