import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ShoppingItem } from '../shoppingitems';
import {ShoppingItemService} from '../shopping-item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  
  @Input() shoppingItem: ShoppingItem;

  constructor(
    private route: ActivatedRoute,
    private shoppingItemService: ShoppingItemService,
    private location: Location
  ) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getShoppingItem();
    //console.log(this.getShoppingItem());
    //console.log(this.shoppingItem);
  }

  getShoppingItem(): void {
    const name = this.route.snapshot.paramMap.get('name'); 
    this.shoppingItemService.getShoppingItem(name)
    .subscribe(ShoppingItem => this.shoppingItem = ShoppingItem);
  }

 

}
