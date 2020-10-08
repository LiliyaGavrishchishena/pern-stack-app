import axios from 'axios';

import actions from './productsActions';

axios.defaults.baseURL = 'http://localhost:5000';

const fetchProducts = () => async (dispatch) => {
  dispatch(actions.fetchProductsRequest());

  try {
    const response = await axios.get('/products');
    dispatch(actions.fetchProductsSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchProductsError(error));
  }
};

export default { fetchProducts };
