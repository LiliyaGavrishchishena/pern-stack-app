import types from './productsActionsTypes';

const fetchProductsRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchProductsSuccess = (products) => ({
  type: types.FETCH_SUCCESS,
  payload: products,
});

const fetchProductsError = (error) => ({
  type: types.FETCH_ERROR,
  payload: error,
});

const addProduct = (product) => ({
  type: types.ADD_PRODUCT,
  payload: product,
});

const editProduct = (product) => ({
  type: types.EDIT_PRODUCT,
  payload: product,
});

const deleteProduct = (id) => ({
  type: types.DELETE_PRODUCT,
  payload: id,
});

export default {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsError,
  addProduct,
  editProduct,
  deleteProduct,
};
