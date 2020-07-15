import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // products = [{name : 'lasercut',
  //             img:"/assets/images/img1.png",
  //             cost: 20, 
  //             availbility: 20,
  //             review:"Very Good Product",
  //             specs:"Laser cut engraved both sides", 
  //             Rating: 4.7,
  //             deliveryTime: 2,
  //             warranty: 6
  //             }
  //             ,
  //             {name : 'wirecut',img:"/assets/images/img2.png",
  //             cost: 30, 
  //             availbility: 40,
  //             review:"fantastic Product",
  //             specs:"wire cut engraved both sides", 
  //             Rating: 4.3,
  //             deliveryTime: 4,
  //             warranty: 10
  //             }
  //           ]

  AllProducts = new ProductsService()
  products= this.AllProducts.products
  
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  viewDetail(prod){
    this.router.navigate(['/detail', { product: prod.name , id:prod.name}]);
    console.log("product Clicked "+ prod.name);
  }

}
