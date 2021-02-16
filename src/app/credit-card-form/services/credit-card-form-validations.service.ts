import {Injectable} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CreditCardFormValidationsService {

  constructor() {
  }

  /**
   * Custom Validation For Expiry Date
   * @param date
   */
  dateValidations(date: AbstractControl) {
    const currentDateTime = new Date();
    const controlValueExpiryDate = new Date(date.value);
    if (currentDateTime >= controlValueExpiryDate) {
      return {response: true};
    }
    return null;
  }
}
