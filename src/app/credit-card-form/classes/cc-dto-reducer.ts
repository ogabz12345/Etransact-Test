import {CcDtoModel} from './cc-dto-model';
import * as DTOActions from './cc-ngrx-action';


/**
 * defining a default state for the DTO Model
 */
// const initialState: CcDtoModel = {
//   securityCode: '123',
//   expirationDate: new Date(),
//   creditCardNo: 3283782372,
//   cardHolder: 'Oladele Ogabi',
//   amount: 1000.89,
// }


export function reduceState(state: CcDtoModel[] = [], action: DTOActions.Actions) {

  switch(action.type) {
    case DTOActions.ADD_CCDTOMODEL:
      return [...state, action.payload];
    case DTOActions.REMOVE_CCDTOMODEL:
      const index = action.payload;
      return [...state.slice(0, index), ...state.slice(index + 1)];
      return state;
    default:
      return state;
  }
}

export interface AppState {
  readonly ccDtoModel: CcDtoModel[];
}
