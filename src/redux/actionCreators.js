import {
  ADD_CON,
  ADD_PRO,
  DELETE_CON,
  DELETE_PRO,
  EDIT_CON,
  EDIT_PRO
} from './actionTypes';

export default class ActionCreators {
  static addCon(con) {
    return {
      type: ADD_CON,
      con
    };
  }

  static addPro(pro) {
    return {
      type: ADD_PRO,
      pro
    };
  }

  static deleteCon(id) {
    return {
      type: DELETE_CON,
      id
    };
  }

  static deletePro(id) {
    return {
      type: DELETE_PRO,
      id
    };
  }

  static editCon(id, con) {
    return {
      type: EDIT_CON,
      id,
      con
    };
  }

  static editPro(id, pro) {
    return {
      type: EDIT_PRO,
      id,
      pro
    };
  }
}
