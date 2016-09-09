import React from 'react';
import Fluxxor from'fluxxor';

var FluxMixin         = Fluxxor.FluxMixin(React);
var StoreWatchMixin   = Fluxxor.StoreWatchMixin;

import logo from '../images/logo.svg';
import '../css/App.css';

import StoryIndex from './components/stories'

module.exports = React.createClass({
  displayName: 'App',
  mixins: [FluxMixin, StoreWatchMixin('StoriesStore')],
  getStateFromFlux: function() {
    var flux = this.getFlux();

    return {
      state: {}
    };
  },
  componentWillMount:function() {
    console.log('app will mount');
    this.getFlux().actions.stories.get();
  },
  render: function() {
    return (
      <div className="app">
        <div className="app_header">
          <img src={logo} className="app_logo" alt="The Week" />
        </div>
        <StoryIndex />
      </div>
    );
  }

});
