import React, { Component } from 'react';
import PropTypes from "prop-types";
import Loader from "./Loader.jsx";

class Results extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    beers: PropTypes.array.isRequired
  }
  render() {
      if (this.props.loading) {
        return (
          <Loader message="正在加载中···" />
        )
      }
    }
}
 
export default Results;