import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {

  names:{firstname:string}[] = [];

  name:string;
  constructor(private db:AngularFirestore) { }

  add(){
    this.db.collection('names').add({firstname:this.name});

  }


  ngOnInit() {
    this.db.collection<{firstname:string}>('names').valueChanges().subscribe(result=>{
      this.names = result;
    })

  }

}
