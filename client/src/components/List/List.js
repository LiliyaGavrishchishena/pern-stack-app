import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { productsSelectors, productsOperations } from '../../redux/products';
import { modalActions } from '../../redux/modal';
//components
import Spinner from '../Spinner';

//styles
import styles from './List.module.css';

class List extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    fetchProducts: PropTypes.func.isRequired,
  };

  state = { isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });
    const { fetchProducts } = this.props;
    fetchProducts();
    this.setState({ isLoading: false });
  }

  render() {
    const { products = [] } = this.props;
    const { isLoading } = this.state;

    return (
      <div className={styles.list}>
        <div className={styles.container}>
          <h2 className={styles.header}>All hotdogs</h2>
          {isLoading ? (
            <Spinner />
          ) : (
            <ul className={styles.list}>
              {products.map((product) => (
                <li className={styles.item} key={product.id}>
                  <div>
                    <img
                      src="https://oukosher.org/content/uploads/2019/08/hotdog.jpg"
                      width="250"
                      height="150"
                      alt="Hotdog"
                    />
                    <h4 className={styles.title}>{product.productName}</h4>
                    <p className={styles.price}>{product.productPrice}</p>
                    <p className={styles.descr}>{product.productDescription}</p>
                    <button
                      className={styles.button}
                      type="button"
                    >
                      Edit
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: productsSelectors.getProducts(state),
  openModal: modalActions.openModal,
});

const mapDispatchToProps = {
  fetchProducts: productsOperations.fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(List));
