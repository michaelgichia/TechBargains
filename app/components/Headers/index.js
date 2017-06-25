/**
*
* Headers
*
*/

import React from "react";
import Helmet from "react-helmet";

// import styled from 'styled-components';

function Headers({ product }) {
  return (
    <Helmet
      title={product.name}
      meta={[
        {
          name: "og:url",
          content: `https://deals-expert.com/product/${product.id}`
        },
        { name: "og:type", content: "product.item" },
        { name: "og:title", content: product.name },
        {
          name: "og:description",
          content: `${(
            <div
              dangerouslySetInnerHTML={{
                __html: product.features
              }}
            />
          )}`
        },
        { name: "og:image", content: product.image }
      ]}
    />
  );
}

Headers.propTypes = {};

export default Headers;
