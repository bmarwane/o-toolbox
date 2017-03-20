// @flow
import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/config';

import Configuration from '../components/Configuration/Page';
import { hashHistory } from 'react-router';


export class ConfigurationPage extends Component {

  componentDidUpdate() {
    if(this.props.saved){
      hashHistory.push('/');
    }
  }
  render() {
    return (
      <Configuration {...this.props} />
    );
  }
}



function mapStateToProps(state) {
  return {
    folder: state.config.get('folder'),
    loading: state.config.get('loading'),
    saved: state.config.get('saved')
  };
}

export default connect(mapStateToProps, actions)(ConfigurationPage);
