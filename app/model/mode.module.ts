import { AuthService } from './auth.service';
import { Cart } from './cart.model';
import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [HttpClientModule],
    providers: [ProductRepository, Cart, Order, AuthService, RestDataSource, OrderRepository,
        {provide:StaticDataSource , useClass: RestDataSource }]
})
export class ModelModule { }