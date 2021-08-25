import React from 'react';
import ReactDOM from 'react-dom';
import ToggleSwitch from './toggle-switch';

const challenge = <h1>How challenges make you feel:</h1>;

ReactDOM.render(challenge, document.querySelector('#challenge'));

ReactDOM.render(<ToggleSwitch />, document.querySelector('#root'));
