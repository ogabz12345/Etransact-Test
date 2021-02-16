import {Action} from '@ngrx/store';
import {CcDtoModel} from './cc-dto-model';

/**
 * Type of Action (Add, Remove);
 */
export const ADD_CCDTOMODEL       = '[CcNgrxAction] Add'
export const REMOVE_CCDTOMODEL    = '[CcNgrxAction] Remove'

/**
 * Creating class for each action (Add, Remove);
 */
export class AddDtoModel implements Action {
  readonly type = ADD_CCDTOMODEL

  constructor(public payload: CcDtoModel) {}
}

export class RemoveDtoModel implements Action {
  readonly type = REMOVE_CCDTOMODEL

  constructor(public payload: number) {}
}

/**
 * Exporting action classes for reducer (Add, Remove);
 */
export type Actions = AddDtoModel | RemoveDtoModel;
