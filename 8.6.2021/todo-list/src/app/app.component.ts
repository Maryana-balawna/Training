import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [

    trigger('grow', [
      // Note the trigger name
      transition(':enter', [
        // :enter is alias to 'void => '
        style({ height: '0', overflow: 'hidden' }),
        animate(200, style({ height: '' })),
      ]),
      transition(':leave', [
        // :leave is alias to '* => void'
        animate(100, style({ height: 0, overflow: 'hidden' })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'todo-list';

  public items:string[] = [] ;
  public newTask: string = '';

  ngOnInit(){
   // localStorage.getItem("datas") ? this.items = JSON.parse(localStorage.getItem("datas")) :
   this.items = JSON.parse(localStorage.getItem("items") ||  '{}');
   console.log(this.items);
  }
  addToList() {
    if (this.newTask == '') {

     // swal ( "Oops" ,  "Title can not be null" ,  "error" )
      swal({
        title: "Error",
        text: "titl can not be empty",
        icon: "https://cdn.discordapp.com/attachments/834021167060746290/852115410282610718/EgU8Mc7WoAIW8nz.png",
      });

    } else {
      this.items.push(this.newTask);
      this.creatOrUpdateLocalStorage();
      this.newTask = '';
    }
  }

  /*delete function*/
  deleteTask(index:number) {
   //
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: [true,true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Item deleted succefully !", {
          icon: "success",
        });
      this.items.splice(index, 1);
      this.creatOrUpdateLocalStorage();

      }
    });

  }
   creatOrUpdateLocalStorage(){
     localStorage.setItem("items",JSON.stringify(this.items));
   }
}
