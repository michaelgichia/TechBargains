/**
*
* Disclaimer
*
*/

import React from 'react';
import CouponHeader from "components/CouponHeader";
// import styled from 'styled-components';


class Disclaimer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ marginBottom: 20 }}>
        <CouponHeader title="DISCLAIMER" />
        <p>If you click a merchant link and buy a product or service on their website, we may be paid a fee by the merchant.</p>
      </div>
    );
  }
}

Disclaimer.propTypes = {

};

export default Disclaimer;
