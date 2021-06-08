
import { style } from "@angular/animations";
import { Component} from "@angular/core";



@Component({
    selector:'app-root' ,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent{

  username: string;
  usernameFromChild: string;
  passwordFromChild: string;


     /*item={id:1};*/


    constructor(){}
    log($event: any){
      console.log($event);
    }
     /* call(phoneNumber:string){
        console.log(phoneNumber);
      }*/


    }







