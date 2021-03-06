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

  static editCon(id, text) {
    return {
      type: EDIT_CON,
      id,
      text
    };
  }

  static editPro(id, text) {
    return {
      type: EDIT_PRO,
      id,
      text
    };
  }

  static dropToCons(id, item) {
    return {
      type: DROP_TO_CONS,
      id,
      item
    };
  }

  static dropToPros(id, item) {
    return {
      type: DROP_TO_PROS,
      id,
      item
    };
  }
}
