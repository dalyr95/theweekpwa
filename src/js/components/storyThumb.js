import React from 'react';

module.exports = React.createClass({
  displayName: 'Story',
  render: function() {
  	var story = this.props.story;
  	var image = story.resourceManifest[0].sizes[2] || story.resourceManifest[0].sizes[1];

	var styles = {
	  backgroundImage: 'url(' + image.url + ')',
	  opacity: 1
	};

    return (
      <div className="story" style={styles}>
      	<h2>{story.title}</h2>
      </div>
    );
  }

});
