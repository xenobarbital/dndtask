import {combineReducers} from 'redux';
import {
  ADD_CON,
  ADD_PRO,
  DELETE_CON,
  DELETE_PRO,
  EDIT_CON,
  EDIT_PRO,
  DROP_TO_CONS,
  DROP_TO_PROS
} from './actionTypes';

const cons = (state = [], action) => {
  switch(action.type) {
    case ADD_CON:
      return [...state, action.con];
    case DELETE_CON:
      return state.filter(el => el.id !== action.id);
    case EDIT_CON:
      return state.map(el => el.id === action.id ? {
        text: action.text,
        id: action.id
      } : el);
    case DROP_TO_CONS: {
      let index = state.findIndex(el => el.id === action.id);
      let copyState = [...state];
      if (index >= 0) {
        copyState.splice(index + 1, 0, action.item);
      }
      return copyState;
    }
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
    case EDIT_PRO: {
      return state.map(el => el.id === action.id ? {
        text: action.text,
        id: action.id
      } : el);
    }
    case DROP_TO_PROS: {
      let index = state.findIndex(el => el.id === action.id);
      let copyState = [...state];
      if (index >= 0) {
        copyState.splice(index + 1, 0, action.item);
      }
      return copyState;
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  pros,
  cons
});

export default rootReducer;
