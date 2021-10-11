import React, { Component } from "react";
import {Route, Redirect} from 'react-router-dom';
import Api from './../utils/index'
class BeforeRouteEnter extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    const {routerConfig, location} = this.props;
    const {pathname} = location
  }
}
exports default BeforeRouteEnter