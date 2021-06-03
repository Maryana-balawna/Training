
import { Component } from "@angular/core";

/*interface Student{
id:number,
name:string,

}*/

@Component({
    selector:'app-root' ,
    templateUrl: './app.component.html'

})
export class AppComponent{

  /*students :Array<Student>;*/

  /*img:string = 'https://image.winudf.com/v2/image1/Y29tLnBpY3RyZXMuY2F0c19zY3JlZW5fNF8xNTQzNDY1NDI3XzA2NQ/screen-4.jpg?fakeurl=1&type=.jpg'
  activeimg :string | undefined;
  name : string = 'Angular';
  somecolor= 'color:#f00'*/

/*isactive:boolean=false;*/
/*
userName=undefined;
name=undefined;*/



    constructor(){   }
      call(phoneNumber:number){
        console.log(phoneNumber);

      }


    /*  this.students=[
        {id: 1 , name:'maryana'},
        {id: 2 , name:'mahmoud'},
        { id: 3 , name:'islam'},
      ] */


       /* console.log(`i am in ${environment.x} mode`)*/

             /*this.changeImag();*/



     /*changeImag(){
          this.activeimg = this.img;
     }*/
     /*
     getName(){

      this.userName=this.name;

     }*/
     /*Refresh(){
      this.students=[
        {id: 1 , name:'maryana'},
        {id: 2 , name:'mahmoud'},
        { id: 3 , name:'islam'},
        { id: 4 , name:'karma'},
      ]



     }
     track(index:number, student:Student){

     return student.id

     }*/
}



