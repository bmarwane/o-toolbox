// @flow
import { Map, List } from 'immutable';

import { TOOLBOX_FOLDER_SET,
  CONFIGURATION_SAVE_BEGIN,
  CONFIGURATION_SAVE_END,

  CONFIGURATION_LOAD_BEGIN,
  CONFIGURATION_LOAD_END
} from '../actions/config';

export default function (state = Map(), action) {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      return state.merge({
        loading: false,
        saved: false
      });

    case TOOLBOX_FOLDER_SET:
      return state.merge({
        folder: action.folder
      });

    case CONFIGURATION_SAVE_BEGIN:
      return state.merge({
        loading: true
      });
    case CONFIGURATION_SAVE_END:
      return state.merge({
        loading: false,
        saved: true
      });

    case CONFIGURATION_LOAD_BEGIN:
      return state.merge({
        loading: true
      });
    case CONFIGURATION_LOAD_END:
      return state.merge({
        loading: false,
        folder: action.config.folder
      });



    default:
      return state;
  }
}
