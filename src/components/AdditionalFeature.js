import React from 'react';
import { connect } from 'react-redux';

import { addNewFeature } from '../actions';

const AdditionalFeature = props => {
  console.log(props)
  
  const addFeatureHandler = (e) => {
    e.preventDefault();
    props.addNewFeature(props.feature)
  };
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeatureHandler}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapPropsToState = (state) => {
  return {

  }
}

export default connect(mapPropsToState, { addNewFeature })(AdditionalFeature);
