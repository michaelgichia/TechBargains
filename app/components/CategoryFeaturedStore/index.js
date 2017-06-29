/**
*
* CategoryFeaturedStore
*
*/

import React from "react";
import shortid from "shortid";
import { Image, Transformation } from "cloudinary-react";


class CategoryFeaturedStore extends React.PureComponent {

  handleStoreWithoutImage = stores =>
    stores.map(store =>
      <a key={shortid.generate()} href={`/merchant/${store._id.toString()}`}>
        {store.title}
      </a>
    );

  handleStoreWithImages = stores =>
    stores.map(store =>
      <a key={shortid.generate()} href={`/merchant/${store._id.toString()}`}>
          <Image publicId={store.public_id}>
            <Transformation
              width="200"
              crop="scale"
              height="200"
              dpr="auto"
            />
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
    })
    console.log({withImage, wthoutImage})
    return (
      <div>
        <div>
          {this.handleStoreWithoutImage(wthoutImage)}
        </div>
        <div>
          {this.handleStoreWithImages(withImage)}
        </div>
      </div>
    );
  }
}

CategoryFeaturedStore.propTypes = {};

export default CategoryFeaturedStore;
