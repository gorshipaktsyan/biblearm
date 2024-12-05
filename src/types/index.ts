export interface IBook {
  _id: number;
  name: string;
  code: string;
  abbreviation: string;
  chapters: number;
  full_name: string;
  subject: string;
}

export interface IVerse {
  _id: number;
  book_id: number;
  chapter: number;
  number: number;
  verse: string;
  prefix: string | null;
}
