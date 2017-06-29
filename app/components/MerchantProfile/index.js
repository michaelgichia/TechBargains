/**
*
* MerchantProfile
*
*/

import React from "react";
import CouponHeader from "components/CouponHeader";

class MerchantProfile extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section className="merchant-profile">
        <CouponHeader title={`About ${this.props.info.title}`} />
        <div dangerouslySetInnerHTML={{ __html: this.props.info.about }} />
      </section>
    );
  }
}

MerchantProfile.defaultProps = {
  info: {
    title: "",
    about: ""
  }
};

export default MerchantProfile;
