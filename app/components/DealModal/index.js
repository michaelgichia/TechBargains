import BuyButton from 'components/BuyButton';
import BackButton from 'components/BackButton';
import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';


function DealModal({ selected, handleClose, open }) {
  const actions = [
    <BuyButton currentStore={selected.merchant} url={selected.backlink} />,
    <BackButton onTouchTap={handleClose} />,
  ];
  return (
    <Dialog
      title={selected.name}
      titleStyle={{
        textAlign: 'center',
        borderBottom: 'solid 1.5px #ee6e73',
        marginBottom: 10,
      }}
      actions={actions}
      actionsContainerStyle={{ textAlign: 'center', top: '50%' }}
      modal={false}
      open={open}
      onRequestClose={handleClose}
    >
          No Coupon code required. Go to store and shop.
        </Dialog>
  );
}

DealModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selected: PropTypes.object.isRequired,

};

export default DealModal;
