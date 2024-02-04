import PersistentStorage from "./PersistentStorage";
import { db } from "../services";

class DataController {
  constructor() {
    this.db = db;
  }

  executeSql(query, params = []) {
    let result = [];
    return new Promise(function (resolve, reject) {
      db.transaction((tx) => {
        tx.executeSql(
          query,
          [],
          (tx, results) => {
            const len = results.rows.length;
            for (let i = 0; i < len; i++) {
              let row = results.rows.item(i);
              result.push(row);
            }
            resolve(result);
          },
          (error) => {
            console.log(error);
            reject(error);
          }
        );
      });
    });
  }

  getBooks() {
    const query = `SELECT * FROM books`;
    return this.executeSql(query);
  }

  getBookChapter({ currentBook, currentChapter }) {
    const query = `SELECT * FROM verses WHERE book_id=${currentBook} AND chapter=${currentChapter}`;
    return this.executeSql(query);
  }
}

export default new DataController();
