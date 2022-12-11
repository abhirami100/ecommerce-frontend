import { Component, OnInit } from '@angular/core';
import { CartApiService } from '../services/cart-api.service';
import { ProductApiService } from '../services/product-api.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalItem=0

  constructor(private productService:ProductApiService,private cartService: CartApiService) { }


  ngOnInit(): void {

    this.cartService.getProducts()
    .subscribe((data)=>{
      this.totalItem =data.length
    })
   
  }



  search(event:any){
    let searchValue=event.target.value
    this.productService.searchTerm.next(searchValue)
  }


 
}
