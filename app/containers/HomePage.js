// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as explorationActions from '../actions/imagesExploration';
import * as configActions from '../actions/config';

export class HomePage extends Component {
  render() {
    return (
      <Home {...this.props} />
    );
  }
}



function mapStateToProps(state) {
  return {
    images: state.images.get('images'),
    folder: state.config.get('folder')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    explorationActions: bindActionCreators(explorationActions, dispatch),
    configActions: bindActionCreators(configActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
