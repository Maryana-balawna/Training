import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent  {

  @Input() itemTitleFromFather:string ;
  @Output() emailEmitter: EventEmitter<string> = new EventEmitter();
  @Output() passwordEmitter: EventEmitter<string> = new EventEmitter();

  email: string;
  password: string;

  constructor() {  }

  sendToFather(){

    this.emailEmitter.emit(this.email);
    this.passwordEmitter.emit(this.password);

  }




}
