import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartService = CartService;
  products = this.cartService.products
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //add qty
  add(name){
    for(let prod of this.products){
      if (name == prod.name)
      {
        prod.qty++;
      }
    }
  }

  //subtract qty
  subtract(name){
    var id=0;
    for(let prod of this.products){
      if (name == prod.name)
      {
        if(prod.qty>1)
          prod.qty--;
        else if(prod.qty==1)
        {
          prod.qty--;
          this.products.splice(id,1);
        }
      }
      id++;
    }
    //console.log(this.products)
  }

  viewDetail(prod){
    this.router.navigate(['/detail', { product: prod.name}]);
    //console.log("product Clicked "+ prod.name);
  }
}
