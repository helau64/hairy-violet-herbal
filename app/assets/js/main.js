import filterEvents from './components/events';
import initNavigationToggle from './components/navigation';

filterEvents();
initNavigationToggle();

document.querySelector('html').classList.remove('no-js');