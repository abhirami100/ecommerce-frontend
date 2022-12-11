import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishList = new BehaviorSubject([])
  wishlistArray =[]

  constructor() { }

  

  addToWList(product:any){
    this.wishlistArray.push(product)
    this.wishList.next(this.wishlistArray)
    let wlist = this.wishList['_value']
    localStorage.setItem("wishlist",JSON.stringify(wlist))
    


  }
}
