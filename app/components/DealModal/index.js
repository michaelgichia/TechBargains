import BuyButton from 'components/BuyButton';
import BackButton from 'components/BackButton';
import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';

class DealModal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const actions = [
      <BuyButton currentStore={this.props.selected.merchant} url={this.props.selected.backlink} />,
      <BackButton onTouchTap={this.props.handleClose} />,
    ];
    
    return (
      <Dialog
        title={this.props.selected.name}
        titleStyle={{
          textAlign: 'center',
          borderBottom: 'solid 1.5px #ee6e73',
          marginBottom: 10,
        }}
        actions={actions}
        actionsContainerStyle={{ textAlign: 'center', top: '50%' }}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.handleClose}
      >
        No Coupon code required. Go to store and shop.
      </Dialog>
    );
  }
}

DealModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selected: PropTypes.object.isRequired,

};

export default DealModal;
