import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { CartService } from '../../cart.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productService = new ProductsService;
  products = this.productService.products;
  cartService = CartService;
  productName ;
  product;
  constructor(private route: ActivatedRoute) { 
    // this.productName = this.route.snapshot.queryParamMap.get('product')
    const name=this.route.snapshot.paramMap.get("product");
    console.log(name)
    this.product = this.myFilter(name)
    // this.product = this.products.filter()
    console.log(this.product.specs);
  }
  
  myFilter(name){
    for(let prod of this.products){
      if(prod.name===name)
        return prod
    }
    return 0;
  }
  
  cart(){
    console.log('Adding to Cart')
    
    //check if product already in cart
    for(let prod of this.cartService.products){
      if(this.product.name==prod.name)
      {
        alert('product is already in cart')
        prod.qty++;
        return;
      }
    }
    this.cartService.products.push(this.product)
    //
    
  }
  
  ngOnInit(): void {
    // console.log(this.route);
    
    

  }

}
