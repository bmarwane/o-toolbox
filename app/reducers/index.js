// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import config from './config'
import images from './imagesExploration'

const rootReducer = combineReducers({
  routing,
  config,
  images
});

export default rootReducer;
