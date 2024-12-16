export interface ILanguageTypes {
  version: string;
  language: string;
  key: string;
  noData: string;
  regExp: { onlyLetters: string };
  navItems: { bookmark: string; settings: string };
  chapter: {
    subjectTitle: string;
    chapterNameHeaderForFirst?: string;
  };
  search: {
    searchByVerse: string;
    search: string;
    searchResult: string;
    errorAlert: string;
  };
  books: {
    recoveryVersion: string;
    books: string;
    headers: string;
    verses: string;
  };
  appBar: {
    copyAlert: string;
    newTestament: string;
    header: string;
  };
  settings: {
    settings: string;
    nightMode: string;
    fontSize: string;
  };
  pagination: {
    back: string;
    forward: string;
  };
}

const armenian: ILanguageTypes = {
  version: "Տարբերակ",
  language: "arm",
  key: "Arm-bible",
  noData: "Տվյալներ չկան",
  regExp: {
    onlyLetters: "[^ա-ֆԱ-Ֆ]",
  },

  navItems: {
    bookmark: "Էջանիշեր",
    settings: "Կարգավորումներ",
  },
  chapter: {
    subjectTitle: "Թեմա՝",
  },
  search: {
    searchByVerse: "Որոնել ըստ հայերեն խոսքի",
    search: "Որոնում",
    searchResult: "Որոնման արդյունքներ",
    errorAlert: "համապատասխան խոսքեր չի գտնվել!",
  },
  books: {
    recoveryVersion: "Վերականգման տարբերակ",
    books: "Գրքեր",
    headers: "Գլուխներ",
    verses: "Խոսքեր",
  },
  appBar: {
    copyAlert: "Այս խոսքի հղումը պատճենվել է։",
    newTestament: "Նոր Կտակարան",
    header: "ԳԼՈՒԽ",
  },
  settings: {
    settings: "Կարգավորումներ",
    nightMode: "Գիշերային ռեժիմ",
    fontSize: "Տառատեսակի չափը",
  },
  pagination: {
    back: "Հետ",
    forward: "Առաջ",
  },
};

export default armenian;
