// @flow
import React, { Component } from 'react';
import type { Children } from 'react';

import { Link } from 'react-router';


export default class App extends Component {
  //noinspection JSAnnotator
  props: {
    children: Children
  };

  render() {
    return (
      <div >
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="btn btn-default pull-right navbar-btn" to="/configuration">
                <span className="glyphicon glyphicon-cog"></span>
              </Link>

            </div>

          </div>
        </nav>

        {this.props.children}
      </div>
    );
  }
}
