// @flow
import { Map, List } from 'immutable';

import {IMAGE_SEARCH_BEGIN, IMAGE_SEARCH_END} from '../actions/imagesExploration';

export default function (state = Map(), action) {
  switch (action.type) {
    case IMAGE_SEARCH_BEGIN:
      return state.merge({
        searching: true
      });
    case IMAGE_SEARCH_END:
      return state.merge({
        searching: false,
        images: action.images
      });

    default:
      return state;
  }
}
