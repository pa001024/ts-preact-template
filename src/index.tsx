import { h, render } from 'preact';

import App from './components/App';
import './global.less';

const mountNode = document.getElementById('e5f7bafe860ab9a90138');

if (mountNode) render(<App />, mountNode);
