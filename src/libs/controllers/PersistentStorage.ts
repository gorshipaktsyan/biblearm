// class PersistentStorage {
//   private lsKey: string;
//   private state: Record<string, any>;

//   constructor() {
//     this.lsKey = 'ArmBible';
//     this.state = {};
//   }

//   private updateStateFromLocalStorage(): void {
//     const persistentStateString: string | null = localStorage.getItem(this.lsKey);
//     let persistentState: Record<string, any>;
//     try {
//       persistentState = JSON.parse(persistentStateString || '{}');
//     } catch (e) {
//       persistentState = {};
//     }
//     this.state = persistentState || {};
//   }

//   private saveStateToLocalStorage(): void {
//     const persistentStateString: string = JSON.stringify(this.state);
//     localStorage.setItem(this.lsKey, persistentStateString);
//   }

//   public set(key: string, value: any): void {
//     this.state[key] = value;
//     this.saveStateToLocalStorage();
//   }

//   public delete(key: string): void {
//     delete this.state[key];
//     this.saveStateToLocalStorage();
//   }

//   public get(key: string): any {
//     this.updateStateFromLocalStorage();
//     return this.state[key];
//   }

//   public getAll(): Record<string, any> {
//     this.updateStateFromLocalStorage();
//     return this.state;
//   }
// }

// export default new PersistentStorage();