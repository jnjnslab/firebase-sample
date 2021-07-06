import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentChangeAction,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/** 扱うデータの型 */
export interface Item {
  name: string;
  age: number;
}
export interface ItemId extends Item { id: string; }

@Component({
  selector: 'app-store01',
  templateUrl: './store01.component.html',
  styleUrls: ['./store01.component.css']
})
export class Store01Component implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<ItemId[]>;

  newName: string = '';
  newAge: number = 0;
  updateId: string = '';
  updateName: string = '';
  updateAge: number = 0;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    //this.items = this.itemsCollection.valueChanges();

    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change. If you want to
    // get the data and the id use the map operator.
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }

  ngOnInit(): void {
  }

  /** Create: データを追加 */
  addItem(): void {
    let data = {
      name: this.newName,
      age: this.newAge
    };
    this.itemsCollection.add(data);
    this.newName = '';
    this.newAge = 0;
  }

  /** データを削除 */
  deleteItem(id:string): void {
    this.itemsCollection.doc(id).delete();
  }

  /** 編集用のフォームにデータを表示 */
  editItem(item:ItemId): void {
    this.updateId = item.id;
    this.updateName = item.name;
    this.updateAge = item.age;
  }

  /** Update: データを更新 */
  updateItem(): void {
    let data = {
      name: this.updateName,
      age: this.updateAge
    };
    this.itemsCollection.doc(this.updateId).update(data);
    this.updateName = '';
    this.updateAge = 0;
  }


}