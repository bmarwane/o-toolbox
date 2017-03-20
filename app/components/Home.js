// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';


import SearchBox from '../components/ImagesExploration/SearchBox'
import SearchResult from '../components/ImagesExploration/SearchResult'

export default class Home extends Component {
  onSubmit(e){
    e.preventDefault()
  }

  componentDidMount() {
    this.props.configActions.loadSettings()

  }

  isFolderSet() {
    return !!this.props.folder
  }

  render() {
    return (
      !this.isFolderSet()
        ?
      <Link  className="btn btn-warning btn-block" to="/configuration">
        Please configure search folder
      </Link>
      :
      <div className="container">

        <div className="row">
          <div className="col-md-12">
            <SearchBox {...this.props}/>
          </div>
        </div>
        <SearchResult {...this.props}/>


      </div>
    );
  }
}
