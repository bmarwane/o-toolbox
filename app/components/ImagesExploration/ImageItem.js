import React from 'react'
import styles from './SearchResult.css';

var ipcRenderer = require('electron').ipcRenderer


export default class ImageItem extends React.Component {
  static propTypes = {
    path: React.PropTypes.string
  }

  onDragStart(event) {
    console.log(this.props.path)
    event.preventDefault()
    ipcRenderer.send('ondragstart', this.props.path)

  }

  render() {
    return (
      <img className={styles.imgItem} src={this.props.path} key={this.props.path}
           onDragStart={this.onDragStart.bind(this)}/>
    )
  }
}
