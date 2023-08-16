import React from "react";
import PropTypes from 'prop-types'
import Card from "./shared/Card";

function FeedbackItem({ id, text, rating}) {
  return (
   
    <Card id={id}>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </Card>
  );
}

FeedbackItem.prototype = {
  item: PropTypes.object.isRequired,

}

export default FeedbackItem;
