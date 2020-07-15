import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productService = new ProductsService;
  products = this.productService.products;
  productName ;
  product;
  constructor(private route: ActivatedRoute) { 
    // this.productName = this.route.snapshot.queryParamMap.get('product')
    const name=this.route.snapshot.paramMap.get("product");
    console.log(name)
    this.product = this.myFilter(name)
    console.log(this.product.specs);
  }
  
  myFilter(name){
    for(let prod of this.products){
      if(prod.name===name)
        return prod
    }
    return 0;
  }
  
  
  ngOnInit(): void {
    // console.log(this.route);
    
    

  }

}
