import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './classes/cc-dto-reducer';
import * as Actions from './classes/cc-ngrx-action';
import {FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {CcDtoModel} from './classes/cc-dto-model';
import {Router} from '@angular/router';
import {CreditCardFormValidationsService} from './services/credit-card-form-validations.service';
import {ToastrService} from 'ngx-toastr';
import {CcPaymentService} from './services/cc-payment.service';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss']
})
export class CreditCardFormComponent implements OnInit {

  cardDetails: FormGroup;
  cardDetailsModel: CcDtoModel;
  submitted = false;

  constructor(private store: Store<AppState>,
              private formBuilder: FormBuilder,
              private router: Router,
              private toast: ToastrService,
              private paymentService: CcPaymentService,
              private customValidations: CreditCardFormValidationsService
  ) {
    this.cardDetails = this.formBuilder.group({
      amount: ['', [Validators.required, Validators.minLength(1)]],
      cardHolder: ['', Validators.required],
      expirationDate: [null, [Validators.required, customValidations.dateValidations]],
      creditCardNo: ['', Validators.required],
      securityCode: [''],

    });
  }

  /**
   * Method to add card
   */

  addTutorial() {
    this.submitted = true;
    if (this.cardDetails.valid) {
      this.cardDetailsModel = this.cardDetails.getRawValue();
      this.store.dispatch(new Actions.AddDtoModel(this.cardDetailsModel));
      this.toast.success('Card Successfully Created', 'Success');
      this.submitCard();
      this.router.navigate(['home']);
    }
  }
  /**
   * Post Method to add card, this would throw an error since the http doesn't exists.
   */
  submitCard() {
    this.cardDetailsModel = this.cardDetails.getRawValue();
    this.paymentService.postCard(this.cardDetailsModel).subscribe(data => {
      // this.toast.success('Card Successfully Created', 'Success');
      console.log(data);
    }, (error) => {
      // this.toast.error('Error Adding Card', 'Error');
      console.log(error);
    }
  );
  }

  ngOnInit() {

  }

  /**
   * Method to check validations
   */

  get registerFormControl() {
    return this.cardDetails.controls;
  }

  /**
   * Method to go back to home page
   */

  cancel() {
    this.toast.warning('Back to home page', 'Cancelled');
    this.router.navigate(['home']);
  }

}
