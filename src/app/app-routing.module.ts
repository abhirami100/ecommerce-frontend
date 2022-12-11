import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcartComponent } from './addcart/addcart.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path:'',component:ProductListComponent
  },
  {
    path:'view-product/:id',component:ViewproductComponent
  },
  {
    path:'cart',component:AddcartComponent
  },
  {
    path:'wishlist',component:WishlistComponent
  },
  {
    path:'payment',component:PaymentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
