import CONSTANTS from '../constants/constants';

var actions = {
	stories: {
		get: function() {
			this.dispatch(CONSTANTS.STORIES.GET, {});
		},
		got: function() {
			this.dispatch(CONSTANTS.STORIES.GOT, {});
		}
	},
	story: {
		get: function() {
			this.dispatch(CONSTANTS.STORY.GET, {});
		}
	}
};

module.exports = actions;