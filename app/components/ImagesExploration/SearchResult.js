import React from 'react'
import styles from './SearchResult.css';


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
          <img className={styles.imgItem} src={image.get('path')} key={image.get('path')}/>
        </div>)}
      </div>
    )
  }
}
