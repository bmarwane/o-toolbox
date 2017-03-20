import React from 'react'
import styles from './SearchResult.css';
import ImageItem from './ImageItem'

export default class SearchResult extends React.Component {

  static propTypes = {
    images: React.PropTypes.object
  }

  getImages() {
    if(!this.props.images) {
      return []
    }

    return this.props.images
  }


  render() {
    return (
      <div className={styles.resultList}>
        {this.getImages().map((image, index) => <div className={styles.item}>
          <ImageItem path={image.get('path')} />

        </div>)}
      </div>
    )
  }
}
