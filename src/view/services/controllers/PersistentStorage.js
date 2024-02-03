class PersistentStorage {
  constructor() {
    this.lsKey = "e2bStore";
  }

  updateStateFromLocalStorage() {
    const persistentStateString = localStorage.getItem(this.lsKey);
    let persistentState;
    try {
      persistentState = JSON.parse(persistentStateString);
    } catch (e) {
      persistentState = {};
    }
    if (!persistentState) persistentState = {};
    this.state = persistentState;
  }

  saveStateToLocalStorage() {
    const persistentStateString = JSON.stringify(this.state);
    localStorage.setItem(this.lsKey, persistentStateString);
  }

  set(key, value) {
    this.state[key] = value;
    this.saveStateToLocalStorage();
  }

  delete(key) {
    delete this.state[key];
    this.saveStateToLocalStorage();
  }

  get(key) {
    this.updateStateFromLocalStorage();
    return this.state[key];
  }

  getAll() {
    this.updateStateFromLocalStorage();
    return this.state;
  }
}

export default new PersistentStorage();
