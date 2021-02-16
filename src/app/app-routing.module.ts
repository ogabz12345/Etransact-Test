import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreditCardFormComponent} from './credit-card-form/credit-card-form.component';
import {AppComponent} from './app.component';
import {CreditCardViewComponent} from './credit-card-view/credit-card-view.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: CreditCardViewComponent},
  {path: 'registerCard', component: CreditCardFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
