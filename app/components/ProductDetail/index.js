import Paper from 'material-ui/Paper';
import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import shortid from 'shortid';
import {
    Header,
    Headline,
    ButtonDiv,
    TitleDiv,
    DetailDiv,
} from './StyledComponents';
import { style } from './style';

function ProductDetail({ product, handleOpen }) {
  return (
    <Paper style={style.sectionDiv}>
      <Header style={{ backgroundColor: product.themeColor }}></Header>
      <Paper style={style.firstDiv}>
        <img
          alt="dealsexp"
          style={style.image}
          src={product.image}
        />
      </Paper>
      <Paper style={style.secondDiv}>
        <Headline className="header-div" >{ ReactHtmlParser(product.name) }</Headline>
        <TitleDiv className="title-div" style={{ backgroundColor: product.themeColor }}>{ ReactHtmlParser(product.description) }</TitleDiv>
        <DetailDiv className="detail-div">
          <ul>
            {
              product.features.splice(0, 5).map((detail) => (<li key={shortid.generate()}>{ ReactHtmlParser(detail) }</li>))
            }
          </ul>
        </DetailDiv>
        <ButtonDiv>
          <button
            onClick={() => handleOpen(product.id)}
            style={{
              ...style.dealButton,
              ...{ borderColor: product.themeColor, color: product.themeColor },
            }}
          >
            SEE DEAL
          </button>
        </ButtonDiv>
      </Paper>
    </Paper>
  );
}


ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

ProductDetail.defaultProps = {
  themeColor: '#C3D6E4',
};

export default ProductDetail;
