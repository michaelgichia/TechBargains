/**
*
* CouponDetail
*
*/

import React from 'react';
import CouponPrice from 'components/CouponPrice';
import CouponTitle from 'components/CouponTitle';
import CouponImage from 'components/CouponImage';
import PaperZindex from 'components/PaperZindex';

class CouponDetail extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <PaperZindex>
        <CouponTitle />
        <div className="coupon-div">
          <CouponImage />
          <CouponPrice />
        </div>
      </PaperZindex>
    );
  }
}

CouponDetail.propTypes = {

};

export default CouponDetail;
