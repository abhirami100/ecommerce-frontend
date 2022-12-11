import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AddcartComponent } from './addcart/addcart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PaymentComponent } from './payment/payment.component';
import { SmartphonesComponent } from './smartphones/smartphones.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { FragrancesComponent } from './fragrances/fragrances.component';
import { SkincareComponent } from './skincare/skincare.component';
import { GroceriesComponent } from './groceries/groceries.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    FilterPipe,
    ViewproductComponent,
    AddcartComponent,
    WishlistComponent,
    PaymentComponent,
    SmartphonesComponent,
    LaptopsComponent,
    FragrancesComponent,
    SkincareComponent,
    GroceriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
