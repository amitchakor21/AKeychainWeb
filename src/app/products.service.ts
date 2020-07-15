import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [{name : 'lasercut',
  img:"/assets/images/img1.png",
  cost: 20, 
  availbility: 20,
  review:"Very Good Product",
  specs:"Laser cut engraved both sides", 
  Rating: 4.7,
  deliveryTime: 2,
  warranty: 6
  }
  ,
  {name : 'wirecut',img:"/assets/images/img2.png",
  cost: 30, 
  availbility: 40,
  review:"fantastic Product",
  specs:"wire cut engraved both sides", 
  Rating: 4.3,
  deliveryTime: 4,
  warranty: 10
  }
]
  
  constructor() { }
}
