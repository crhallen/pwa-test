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
    super('StealthNatureDB');
    this.version(1).stores({
      records: '++id', // Primary key and indexed props
    });
    this.records
      .get(99)
      .then((v) => {
        if (v) {
          console.log('99 already there');
          return;
        } else {
          console.log('adding the 99');
          db.records.put({ id: THE_ENTRY });
        }
      })
      .catch((err) => {
        console.log('failed to get the 99', err);
      });
  }
}

export const db = new MyDexie();
