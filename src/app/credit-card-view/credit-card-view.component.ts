import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CcDtoModel} from '../credit-card-form/classes/cc-dto-model';
import {Store} from '@ngrx/store';
import {AppState} from '../credit-card-form/classes/cc-dto-reducer';
import {Router} from '@angular/router';
import * as DTOActions from '../credit-card-form/classes/cc-ngrx-action';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-credit-card-view',
  templateUrl: './credit-card-view.component.html',
  styleUrls: ['./credit-card-view.component.scss']
})
export class CreditCardViewComponent implements OnInit {

  ccdToModels: Observable<CcDtoModel[]>;

  constructor(private store: Store<AppState>, private toast: ToastrService,
              private route: Router) {
  }

  ngOnInit() {
    this.ccdToModels = this.store.select('ccDtoModel');
    console.log(this.ccdToModels);
  }
  /**
   * Method to remove card
   */
  deleteModel(i) {
    console.log(i);
    this.toast.success('Successfullly removed card', 'Deleted');
    this.store.dispatch(new DTOActions.RemoveDtoModel(i));
  }
  /**
   * Method to go to card form
   */
  addNew() {
    this.route.navigate(['/registerCard']);
  }
}
