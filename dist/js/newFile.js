import scrolling from './modules/pageup.js';
import mask from './modules/mask.js';

window.addEventListener('DOMContentLoaded', () => {

	scrolling('.pageup');
	mask('[name="form_text_2"]');
});
