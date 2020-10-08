import types from './productsActionsTypes';

const initialstate = {
  products: [
    {
      id: 1,
      productName: 'New York City',
      productPrice: '1$',
      productDescription:
        'A hot dog is made of the remains of the pig after other parts are cut off and sold as bacon, sausage patties, and ham. However many people across the world eat hot dogs and enjoy them very much. Hot dogs can be boiled, grilled, or fried.',
    },
    {
      id: 2,
      productName: 'Chicago',
      productPrice: '2$',
      productDescription:
        'A hot dog is made of the remains of the pig after other parts are cut off and sold as bacon, sausage patties, and ham. However many people across the world eat hot dogs and enjoy them very much. Hot dogs can be boiled, grilled, or fried.',
    },
    {
      id: 3,
      productName: 'Atlanta and the South',
      productPrice: '1$',
      productDescription:
        'A hot dog is made of the remains of the pig after other parts are cut off and sold as bacon, sausage patties, and ham. However many people across the world eat hot dogs and enjoy them very much. Hot dogs can be boiled, grilled, or fried.',
    },
    {
      id: 4,
      productName: 'Kansas City',
      productPrice: '3$',
      productDescription:
        'A hot dog is made of the remains of the pig after other parts are cut off and sold as bacon, sausage patties, and ham. However many people across the world eat hot dogs and enjoy them very much. Hot dogs can be boiled, grilled, or fried',
    },
  ],
};

const productsReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;

    case type.ADD_PRODUCT:
      return [...state, payload];

    case type.EDIT_PRODUCT:
      return state.map((product) =>
        product.id === product.id ? payload : product
      );

    case type.DELETE_PRODUCT:
      return state.filter((product) => product.id !== payload);

    default:
      return state;
  }
};

export default productsReducer;
