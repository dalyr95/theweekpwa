import React from 'react';
import ReactDOM from 'react-dom';
import Fluxxor from 'fluxxor';

import App from './js/App';
import './css/index.css';

import actions from './js/actions/actions';

import StoryStore from'./js/stores/storyStore';
import StoriesStore from'./js/stores/storiesStore';

var stores = {
	StoryStore: new StoryStore(),
	StoriesStore: new StoriesStore()
};

var flux = new Fluxxor.Flux(stores, actions);

flux.on('dispatch', function(type, payload) {
	console.log('[Dispatch]', type, payload);
});

window.flux = flux;

ReactDOM.render(
  <App flux={flux} />,
  document.getElementById('root')
);
