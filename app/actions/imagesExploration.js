import {loadImagesByQuery} from '../services/ImagesExplorer'
import storage from 'electron-json-storage';

export const IMAGE_SEARCH_BEGIN = 'IMAGE_SEARCH_BEGIN';
export const IMAGE_SEARCH_END = 'IMAGE_SEARCH_END';


export function searchImageBegin() {
  return {
    type: IMAGE_SEARCH_BEGIN
  }
}

export function searchImageEnd(images) {
  return {
    type: IMAGE_SEARCH_END,
    images
  }

}
export function searchImage(queryStr) {
  return (dispatch) => {
    dispatch(searchImageBegin())
    storage.get('config', function (error, config) {

      if(error){
        console.error('Error loading configuration')
      }


      loadImagesByQuery(config.folder, queryStr, (images) => {
        dispatch(searchImageEnd(images))
      })

    })

  }
}
