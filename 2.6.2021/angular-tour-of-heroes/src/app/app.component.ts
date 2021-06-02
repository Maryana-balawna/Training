

import { Component } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
    selector:'app-root' ,
    template:`<p [style]="somecolor"> Hello World {{getAge()}} </p>`

})
export class AppComponent{
  name : string = 'Angular';
  somecolor= 'color:#f00'
    constructor(){

        console.log(`i am in ${environment.x} mode`)


         }
   getAge(){
     return 25 ;
   }
}


