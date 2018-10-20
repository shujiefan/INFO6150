import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
//import { ItemsService } from './items.service';
//import { Router } from '@angular/router';
//import { SHOPPINGITEM } from '../mock-shoppingitems';
import {ShoppingItem} from '../shoppingitems';
import {ShoppingItemService} from '../shopping-item.service';

import { ShoppingCart } from "../_models/shopping-cart.model";
import { ShoppingCartService } from "../_service/shopping-cart.service";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})


export class ItemsComponent implements OnInit {
  ShoppingItems: ShoppingItem[];
  public shoppingItems: Observable<ShoppingItem[]>;

  constructor(
    //private router: Router
    private shoppingItemsService: ShoppingItemService,
    private shoppingCartService: ShoppingCartService
  ) { }

  


  getItems(): void {
    this.shoppingItemsService.getShoppingItems().then(ShoppingItems => {this.ShoppingItems = ShoppingItems},err=>alert(err));
  }

  ngOnInit() { 
    this.getItems();
  }

  sortItemsbyname(): void {
    this.shoppingItemsService.sortShoppingItems().subscribe(
      ShoppingItems => this.ShoppingItems = ShoppingItems.sort(function(a, b) {
        return a.name.localeCompare(b.name);
        }));
  }
  
  sortItemsbyprice1():void{
      this.shoppingItemsService.sortShoppingItems().subscribe(
      ShoppingItems => this.ShoppingItems = ShoppingItems.sort((a: any, b: any) => {
        if(a.price < b.price) {
          return 1;
        } else if (a.price > b.price) {
          return -1;
        } else {
          return 0;
        }
      }));
  }

  sortItemsbyrating():void{
    this.shoppingItemsService.sortShoppingItems().subscribe(
      ShoppingItems => this.ShoppingItems = ShoppingItems.sort((a: any, b: any) => {
        if(a.evaluate < b.evaluate) {
          return 1;
        } else if (a.evaluate > b.evaluate) {
          return -1;
        } else {
          return 0;
        }
      }));
  }

  sortItemsbyprice2():void{
    this.shoppingItemsService.sortShoppingItems().subscribe(
    ShoppingItems => this.ShoppingItems = ShoppingItems.sort((a: any, b: any) => {
      if(a.price < b.price) {
        return -1;
      } else if (a.price > b.price) {
        return 1;
      } else {
        return 0;
      }
    }));
}
  
public addProductToCart(ShoppingItem: ShoppingItem): void {
  this.shoppingCartService.addItem(ShoppingItem, 1);
}

public removeProductFromCart(ShoppingItem: ShoppingItem): void {
  this.shoppingCartService.addItem(ShoppingItem, -1);
}
  

}
