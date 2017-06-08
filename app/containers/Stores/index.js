/*
 *
 * Stores
 *
 */

import React, { PropTypes } from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router';
import CouponHeader from 'components/CouponHeader';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { fetchStores } from './actions';

export class Stores extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    stores: [],
    errors: '',
  }

  componentDidMount() {
    this.props.fetchStores();
  }

  componentWillReceiveProps(nextProps) {
    console.log('Store', nextProps.stores)
    if (nextProps.stores !== this.state.stores) {
      this.setState({ stores: nextProps.stores });
    }
    if (nextProps.errors !== this.state.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  renderStores = (stores) => (
    stores.map((store) => (
      <div className="featured-store" key={shortid.generate()}>
        <Link to={`/${store.id}`}><span className="store-link"></span></Link>
        <LazyLoad height={250}>
            <img src={store.imageUrl} alt={store.title} />
        </LazyLoad>
      </div>
    ))
  );

  render() {
    return (
      <div>
        <CouponHeader
          title="Popular Stores"
        />
        {this.renderStores(this.state.stores)}
      </div>
    );
  }
}

Stores.propTypes = {
  stores: PropTypes.array.isRequired,
  errors: PropTypes.string.isRequired,
  fetchStores: PropTypes.func.isRequired,
};

const mapStateToProps = ({ stores }) => ({
  stores: stores.stores,
  errors: stores.errors,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStores: () => dispatch(fetchStores()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stores);
