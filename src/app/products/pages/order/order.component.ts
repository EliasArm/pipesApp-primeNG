import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean = false;

  toggleUpperCase(): void{
    this.isUpperCase = !this.isUpperCase;

  }

}
