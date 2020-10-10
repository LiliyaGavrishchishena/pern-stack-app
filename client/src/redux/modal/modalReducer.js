import types from '../modal/modalActionTypes';

const initialState = false;

export default function modalReducer(state = initialState, { type }) {
  switch (type) {
    case types.SHOW_MODAL:
      return true;

    case types.HIDE_MODAL:
      return false;

    default:
      return state;
  }
}
