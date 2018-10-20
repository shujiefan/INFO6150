import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const shoppingitem=[
      {
        name : "Chips",
        img : "food1",
        price : 5.99,
        discription : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
        evaluate: 4.3
      },
    {
      name : "Nuts",
      img : "food2",
      price : 9.99,
      discription : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
      evaluate: 5.6
    },
    {
        name : "rackers",
        img : "food3",
        price : 3.99,
        discription : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
        evaluate: 9.1
    },
    {
        name : "JavaScript",
        img : "book1",
        price : 24.99,
        discription : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
        evaluate: 4.3
      },
      {
        name : "Java",
        img : "book2",
        price : 30.00,
        discription : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
        evaluate: 7.9
      },
      {
        name : "Node.js",
        img : "book3",
        price : 28.88,
        discription : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
        evaluate: 4.6
      },
      {
        name : "Samsung S8",
        img : "phone1",
        price : 599,
        discription : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
        evaluate: 3.9
      },
      {
        name : "Google Pixel",
        img : "phone2",
        price : 399,
        discription : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
        evaluate: 6.9
      },
      {
        name : "Iphone X",
        img : "phone3",
        price : 999,
        discription : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
        evaluate: 4.1
      },
      {
        name : "Under Armour",
        img : "bp1",
        price : 34.99,
        discription : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
        evaluate: 4.9
      },
      {
        name : "Backpack",
        img : "bp2",
        price : 45.28,
        discription : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
        evaluate: 5.4
      },
      {
        name : "Under Armour",
        img : "bp3",
        price : 59,
        discription : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
        evaluate: 5
      },
      {
        name : "Nike",
        img : "shoes1",
        price : 99,
        discription : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
        evaluate: 4.2
      },
      {
        name : "Vans",
        img : "shoes2",
        price : 39,
        discription : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
        evaluate: 4.2
      },
      {
        name : "High-heel Shoes",
        img : "shoes3",
        price : 89,
        discription : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
        evaluate: 9
      }
    ];
    return {shoppingitem};
  }
}
