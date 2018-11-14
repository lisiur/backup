import { SET_FILTER } from '../actionTypes';
import { VISIBILITY_FILTERS } from '../../constants';
import { Reducer } from 'redux';

const initialState = VISIBILITY_FILTERS.ALL;

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
