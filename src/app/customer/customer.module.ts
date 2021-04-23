import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './checkout/checkout.component';
const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]; 
@NgModule({
  declarations: [CartComponent,LoginComponent,CheckoutComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class CustomerModule { }
