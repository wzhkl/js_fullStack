import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Header extends Component {
  static propTypes = {
    sideName: PropTypes.string
  }
  state = {  }
  render() { 
    return (
      <h1>
        <Link to='/' >
          {this.props.sideName}
        </Link>
      </h1>
    );
  }
}
 
export default Header;