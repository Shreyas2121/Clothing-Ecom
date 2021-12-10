import React from "react";
import { connect } from "react-redux";

import collectionItem from "../../componets/collection-item/collection-item";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./category.scss";

const CategoryPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="category">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <collectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CategoryPage);
