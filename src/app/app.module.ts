import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardFormComponent } from './credit-card-form/credit-card-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {reduceState} from './credit-card-form/classes/cc-dto-reducer';
import { CreditCardViewComponent } from './credit-card-view/credit-card-view.component';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardFormComponent,
    CreditCardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ccDtoModel: reduceState})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
