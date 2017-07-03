/**
*
* CategoryFeaturedStore
*
*/

import React from "react";
import shortid from "shortid";
import { Image } from "cloudinary-react";
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
        <Image
          cloudName="dw3arrxnf"
          publicId={store.public_id}
          crop="scale"
          width="164"
          height="67"
          responsive
        />
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
      <div>
        <section className="featured-store-wrapper">
          {this.props.stores.length > 0
            ? <ul className="category-store-header">
                  <li>
                    <h2>{`FEATURED ${this.props.title} STORES`}</h2>
                  </li>
              </ul>
            : <div />

          }
          <div className="featured-store-images-wrapper">
            {this.handleStoreWithImages(withImage)}
          </div>
          <div className="featured-store-link">
            {this.handleStoreWithoutImage(wthoutImage)}
          </div>
        </section>
      </div>
    );
  }
}

CategoryFeaturedStore.propTypes = {};

export default CategoryFeaturedStore;
