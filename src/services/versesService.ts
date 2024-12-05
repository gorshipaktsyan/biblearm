import { IVerse } from "../types";
import verses from "./storage/verses.json";

interface IVersesService {
  get: () => IVerse[];
}

class VersesService implements IVersesService {
  private verses: IVerse[];

  constructor() {
    this.verses = verses;
  }

  get(): IVerse[] {
    return this.verses;
  }
}

const versesService = new VersesService();

export default versesService;
