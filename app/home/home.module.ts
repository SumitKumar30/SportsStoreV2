//import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from './../model/mode.module';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    //declarations: [HomeComponent],
    //exports: [HomeComponent]
})
export class HomeModule{}