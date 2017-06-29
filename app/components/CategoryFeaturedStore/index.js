/**
*
* CategoryFeaturedStore
*
*/

import React from "react";
import Col from "react-bootstrap/lib/Col";
import shortid from "shortid";
import { Image, Transformation } from "cloudinary-react";
import "!!style-loader!css-loader!./style.css";

class CategoryFeaturedStore extends React.PureComponent {
  handleStoreWithoutImage = stores =>
    stores.map(store =>
      <a key={shortid.generate()} href={`/merchant/${store._id.toString()}`}>
        {store.title}
      </a>
    );

  handleStoreWithImages = stores =>
    stores.map(store =>
      <a
        className="image-link"
        key={shortid.generate()}
        href={`/merchant/${store._id.toString()}`}
      >
        <Image publicId={store.public_id}>
          <Transformation width="164" crop="scale" height="67" dpr="auto" />
        </Image>
      </a>
    );

  render() {
    const withImage = [];
    const wthoutImage = [];
    this.props.stores.map(store => {
      if (store.imageUrl.length > 1) {
        withImage.push(store);
      } else {
        wthoutImage.push(store);
      }
    });
    return (
      <Col xs={12} sm={12} md={12} lg={4}>
        <section className="featured-store-wrapper">
          <ul className="category-store-header">
            <li>
              <h2>{`FEATURED ${this.props.title} STORES`}</h2>
            </li>
          </ul>
          <div className="featured-store-images-wrapper">
            {this.handleStoreWithImages(withImage)}
          </div>
          <div className="featured-store-link">
            {this.handleStoreWithoutImage(wthoutImage)}
          </div>
        </section>
      </Col>
    );
  }
}

CategoryFeaturedStore.propTypes = {};

export default CategoryFeaturedStore;
