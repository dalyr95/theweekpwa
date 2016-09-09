import Fluxxor from 'fluxxor';
import CONSTANTS from '../constants/constants';

import API from '../api/api';

var StoryStore = Fluxxor.createStore({
    initialize: function(params) {
		this.state = {
			issues:		[],
			stories:	{}
		};

        this.bindActions(
        	CONSTANTS.STORIES.GET, this.getIssues
        );
    },
    getState: function(){
        return this.state;
    },
    getIssues: function() {
		console.log('hello stories get');
		API.issuesGet({}, function(data) {
			console.log(data);
			this.state.issues = data;
			this.getStories();
		}.bind(this));
    },
    getStories: function() {
		API.storiesGet('edition/23-08-2016/morning.json', {}, function(data) {
			console.log(789, data);
			this.state.stories = data;
			console.log(123, this.state);
            this.emit('change:storiesGot');
            this.emit('change');
		}.bind(this));
    }
});

module.exports = StoryStore;
