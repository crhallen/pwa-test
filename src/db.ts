import Dexie, { Table } from 'dexie';

export const THE_ENTRY = 99;

export interface Record {
  id?: number;
  audioBlob?: Blob;
  photoBlob?: Blob;
}

export class MyDexie extends Dexie {
  records!: Table<Record>;

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      records: '++id', // Primary key and indexed props
    });
    this.records
      .get(99)
      .then()
      .catch((err) => {
        db.records.put({ id: THE_ENTRY });
      });
  }
}

export const db = new MyDexie();
