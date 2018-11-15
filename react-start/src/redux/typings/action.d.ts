import { AnyAction } from 'redux';

export interface ACTION extends AnyAction {
  payload: any;
  meta: any;
  error: boolean;
}
