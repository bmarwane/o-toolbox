import React from 'react'
import styles from './SearchBox.css';


export default class SearchBox extends React.Component {

  static propTypes = {
    searchImage: React.PropTypes.func
  }

  onSubmit(e) {
    e.preventDefault()
    const query = this.refs.queryStr.value
    if(query && query.length > 0) {
      this.props.explorationActions.searchImage(query)
    }
  }

  render() {
        return (
          <form onSubmit={this.onSubmit.bind(this)} className={['padded-less', styles.searchBox].join(' ')}>

            <div className="form-group">
              <input ref="queryStr" className="form-control" placeholder="Search an image" />
            </div>
          </form>
        )
    }
}
