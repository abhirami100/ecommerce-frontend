import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartApiService } from '../services/cart-api.service';
import { ProductApiService } from '../services/product-api.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  id:any
  body:any
  constructor(private api:ProductApiService,private activatedRoute:ActivatedRoute,private wlist:WishlistService,private cartService:CartApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.id=data['id']

    })


    this.api.viewproduct(this.id)
    .subscribe((result)=>{
      this.body=result
      console.log(this.body);
      
    })
    
  }

  addtowishlist(body:any){
    this.wlist.addToWList(body)
    alert("Product added to wish list")


  }
  
  addToCart(body:any){
    this.cartService.addToCart(body)
  }

 

}
