import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'page-simple-todos',
  templateUrl: 'simple-todos.html'
})
export class SimpleTodosPage {
  toDos: string[] = [];
  itemToAdd: string;

  constructor(public navCtrl: NavController) {
  }

  addToDo() {
    console.log(this.toDos);
    this.toDos.unshift(this.itemToAdd);
    this.itemToAdd = '';
  }

  delete(t) {
    var index = this.toDos.indexOf(t, 0);
    if (index > -1) {
      this.toDos.splice(index, 1);
    }
  }

}
