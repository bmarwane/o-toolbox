import storage from 'electron-json-storage';


export const TOOLBOX_FOLDER_SET = 'TOOLBOX_FOLDER_SET';
export const CONFIGURATION_SAVE_BEGIN = 'CONFIGURATION_SAVE_BEGIN';
export const CONFIGURATION_SAVE_END = 'CONFIGURATION_SAVE_END';

export const CONFIGURATION_LOAD_BEGIN = 'CONFIGURATION_LOAD_BEGIN';
export const CONFIGURATION_LOAD_END = 'CONFIGURATION_LOAD_END';


export function setToolboxFolder(folder) {
  return {
    type: TOOLBOX_FOLDER_SET,
    folder
  }
}


export function saveConfigurationBegin() {
  return {
    type: CONFIGURATION_SAVE_BEGIN
  }
}


export function saveConfigurationEnd() {
  return {
    type: CONFIGURATION_SAVE_END
  }
}

export function loadConfigurationBegin() {
  return {
    type: CONFIGURATION_LOAD_BEGIN
  }
}


export function loadConfigurationEnd(config) {
  return {
    type: CONFIGURATION_LOAD_END,
    config
  }
}

export function saveSettings(folder) {

  return (dispatch) => {

    dispatch(saveConfigurationBegin())

    storage.set('config', {folder}, function (error) {

      if(error){
        console.error('Error saving configuration')
      }

      dispatch(saveConfigurationEnd())

    })
  }
}
export function loadSettings() {

  return (dispatch) => {

    dispatch(loadConfigurationBegin())

    storage.get('config', function (error, data) {

      if(error){
        console.error('Error loading configuration')
      }

      dispatch(loadConfigurationEnd(data))

    })
  }
}
