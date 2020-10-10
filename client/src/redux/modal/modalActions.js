import types from './modalActionTypes';

const showModal = (id) => ({
  type: types.SHOW_MODAL,
  payload: id,
});

const hideModal = () => ({
  type: types.HIDE_MODAL,
});

export default { showModal, hideModal };
