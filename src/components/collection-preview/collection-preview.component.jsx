import React from "react";
import "./collection-preview.scss";
import Collectionitem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1>{title}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <Collectionitem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
