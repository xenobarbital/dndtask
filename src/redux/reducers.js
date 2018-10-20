import {combineReducers} from 'redux';
import {
  ADD_CON,
  ADD_PRO,
  DELETE_CON,
  DELETE_PRO,
  EDIT_CON,
  EDIT_PRO
} from './actionTypes';

const cons = (state = [], action) => {
  switch(action.type) {
    case ADD_CON:
      return [...state, action.con];
    case DELETE_CON:
      return state.filter(el => el.id !== action.id);
    default:
      return state;
  }
};

const pros = (state = [], action) => {
  switch(action.type) {
    case ADD_PRO:
      return [...state, action.pro];
    case DELETE_PRO:
      return state.filter(el => el.id !== action.id);
    default:
      return state;
  }
};
