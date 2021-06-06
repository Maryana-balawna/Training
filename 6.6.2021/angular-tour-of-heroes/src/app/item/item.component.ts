import { ItemDetailsComponent } from './../item-details/item-details.component';
import { Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent  {
 itemTitleInparent:string='';
  constructor() { }


}
