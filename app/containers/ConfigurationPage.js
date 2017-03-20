// @flow
import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/config';

import Configuration from '../components/Configuration/Page';

export class ConfigurationPage extends Component {
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
