// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';

import FileInput from 'react-file-input';

import styles from './Page.css';

export default class Configuration extends Component {

  constructor(props) {
    super(props);

  }

  static propTypes = {
    folder: React.PropTypes.string,
    loading: React.PropTypes.bool,
    saved: React.PropTypes.bool,
    setToolboxFolder: React.PropTypes.func,
    saveSettings: React.PropTypes.func,
    loadSettings: React.PropTypes.func
  }


  onSubmit(e){
    e.preventDefault()
  }

  handleChange(e) {
    this.props.setToolboxFolder(e.target.files[0].path)
  }

  saveSettings() {
    if(this.props.folder && this.props.folder.length > 0){
      this.props.saveSettings(this.props.folder)
    }
  }

  componentDidMount() {
    /*
     Workaround see https://github.com/facebook/react/issues/3468
     */
    this.refs.folderInput.setAttribute('webkitdirectory', true);

    this.props.loadSettings()
  }

  componentDidUpdate() {
    if(this.props.saved && this.props.saved === true) {
      console.log('Saved')
    }
  }

  render() {
    return (

    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group">
              <label>Toolbox base folder</label>

              <input ref="folderInput" type="file" onChange={this.handleChange.bind(this)} />

            </div>
            <div className="form-group">
              <textarea disabled={true} className="form-control" rows="3" value={this.props.folder}></textarea>
            </div>

            <div className="row">
              <div className="col-md-12">
                <Link className="btn btn-default" to="/">
                  Cancel
                </Link>

                <button className="btn btn-primary pull-right" onClick={this.saveSettings.bind(this)}>
                  Save
                </button>
              </div>
            </div>

          </form>

        </div>
      </div>




      </div>
    );
  }
}
