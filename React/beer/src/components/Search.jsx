import React, { Component } from 'react';
// import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

  class Search extends Component {
    // static contextTypes = {
  //   router: PropTypes.object.isRequired
  // }
    constructor(props, context) {
      super(props, context);
      // console.log(this.props.history);
      this.searchRef = React.createRef();
    }
    // es6 class 
  render() { 
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref={this.searchRef} placeholder="Hoppy, Malt" />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const search = this.searchRef.current.value;
    console.log(search)
    // / => /search/:val
    console.log(this.context.router)
    // this.context.route.history.push(`/search/${search}`)
    this.props.history.push(`/search/${search}`)
  }
}
 
export default withRouter(Search);