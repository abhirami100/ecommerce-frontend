import { Component, OnInit } from '@angular/core';
import { CartApiService } from '../services/cart-api.service';
import { ProductApiService } from '../services/product-api.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  search:any
  productDetails:any
  
  constructor(private productApi:ProductApiService,private wlist:WishlistService,private cartService:CartApiService ) { }

  ngOnInit(): void {
    //asynchronous
    this.productApi.getproducts()
    .subscribe((result:any)=>{
      this.productDetails=result.products
      console.log(this.productDetails);
      this.productDetails.forEach((item:any)=>{
        Object.assign(item,{quantity:1,total:item.price})
      })

    
      
    })
    this.productApi.searchTerm.subscribe((data)=>{
      this.search=data
    })
  }

  addtowishlist(product:any){
    this.wlist.addToWList(product)
    alert("Product added to wish list")


  }
  
  addToCart(product:any){
    this.cartService.addToCart(product)
  }


}
