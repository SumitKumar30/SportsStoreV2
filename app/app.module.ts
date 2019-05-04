import { FormsModule } from '@angular/forms';
import { CartDetailComponent } from './navbar/cartDetail.component';
import { CheckoutComponent } from './navbar/checkOut.component';
import { CartSummaryComponent } from './navbar/cartSummary.component';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CartSummaryComponent,
    CheckoutComponent,
    CartDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HomeModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'cart', component:CartDetailComponent},
      {path:'checkout', component:CheckoutComponent},
      {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
      {path:'**', redirectTo:''}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
