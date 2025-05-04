import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, remove, set } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {
  private db: any;
  private itemRef: any;

  locallist: any[] | null;
  remotelist: any[];

  constructor() {
    this.remotelist = [];
    const myList: string | null = localStorage.getItem("local");
    this.locallist = myList != null ? JSON.parse(myList) : [];
    const firebaseApp = initializeApp(environment);
    this.db = getDatabase(firebaseApp);
    this.itemRef = ref(this.db, 'items');
    this.listen();
  }

  listen() {
    onValue(this.itemRef, (snapshot) => {
      const data = snapshot.val();
      this.remotelist = data ? Object.keys(data).map(id => ({ id, ...data[id] })) : [];
    });
  }

  add(item: any, type: string) {
    if (type === 'local') {
      this.locallist?.push(item);
      localStorage.setItem("local", JSON.stringify(this.locallist));
    } else if (type === 'remote') {
      set(ref(this.db, `courseSchedule/${item.sectionNumber}`), item).then(() => {
        alert("Course added to Firebase!");
      });
    }
  }

  remove(id: string, type: string) {
    if (type === 'local') {
      this.locallist?.splice(this.locallist.findIndex(item => item.sectionNumber == id), 1);
      localStorage.setItem("local", JSON.stringify(this.locallist));
    } else if (type === 'remote') {
      this.remotelist?.splice(this.remotelist.findIndex(item => item.sectionNumber == id), 1);
      remove(ref(this.db, `courseSchedule/${id}`)).then(() => {
        alert("Course removed from Firebase!");
      });
    }
  }

  getLocalList() {
    return this.locallist;
  }

  getRemoteList() {
    return this.remotelist;
  }
}