import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-storage01',
  templateUrl: './storage01.component.html',
  styleUrls: ['./storage01.component.css']
})
export class Storage01Component implements OnInit {

  profileUrl: Observable<string>;

  constructor(private storage: AngularFireStorage) {
    const ref = this.storage.ref('zophie.jpg');
    this.profileUrl = ref.getDownloadURL();
   }

  ngOnInit(): void {
  }

  uploadFile(event:any) {
    const file = event.target.files[0];
    const filePath = file.name;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
  }

  downloadFile() {
    const ref = this.storage.ref('img1.jpg');
    this.profileUrl = ref.getDownloadURL();
  }

}
