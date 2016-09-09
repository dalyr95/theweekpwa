import React, { Component } from 'react';
import Fluxxor from'fluxxor';

var FluxMixin         = Fluxxor.FluxMixin(React);
var StoreWatchMixin   = Fluxxor.StoreWatchMixin;

import StoryThumb from './storyThumb'

module.exports = React.createClass({
  displayName: 'App',
  mixins: [FluxMixin, StoreWatchMixin('StoriesStore')],
  getStateFromFlux: function() {
    var flux = this.getFlux();

    return {
        stories: flux.store('StoriesStore').getState().stories
    };
  },
  render: function() {
    console.log('render', this.state, this.state.stories);
    var stories = [];

    if (this.state.stories && this.state.stories.blocks) {
      this.state.stories.blocks.forEach(function(story) {
        stories.push(
          <StoryThumb key={story.id} story={story} />
        );
      });
    }

    return (
      <div className="stories">
        {stories}
      </div>
    );
  }

});
