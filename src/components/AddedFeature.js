import React from 'react';
import { connect } from 'react-redux';
import { deleteFeature }from '../actions'

const AddedFeature = props => {
  const deleteFeatureHandler = (e) => {
    e.preventDefault();
    props.deleteFeature(props.feature);
  };
  
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={deleteFeatureHandler}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = () => {
  return {
  }
}

export default connect(mapStateToProps, { deleteFeature })(AddedFeature);
