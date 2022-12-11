import { Component, OnInit } from '@angular/core';
import { CartApiService } from '../services/cart-api.service';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {

  products=[]
  totalPrice=0


 
 

  constructor(private cartService:CartApiService) { }

  ngOnInit(): void {

    this.cartService.getProducts().subscribe((data)=>{
      this.products=data
      console.log(this.products);
      this.totalPrice=this.cartService.getTotalPrice()


      
      

    })

}
removeItemCart(item:any){
  this.cartService.removeItemCart(item)
}
}