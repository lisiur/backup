import { SET_FILTER } from '../actionTypes';
import { VISIBILITY_FILTER } from '../../constants';
import { Reducer } from 'redux';

const initialState = VISIBILITY_FILTER.ALL;

const visibilityFilter: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
