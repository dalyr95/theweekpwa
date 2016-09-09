import Fluxxor from 'fluxxor';
import CONSTANTS from '../constants/constants';

var StoryStore = Fluxxor.createStore({
    initialize: function(params) {
		this.state = {
		};

        this.bindActions(
        );
    },
    getState: function(){
        return this.state;
    }
});

module.exports = StoryStore;
