import 'normalize.css'
import './style.scss'

import { changeLanguage } from './components/changeLanguage';
import { burgerMenu } from './components/burgerMenu';
import { blogScroll } from './components/blogScroll';


const init = () => {
  changeLanguage();
  burgerMenu();
  blogScroll();
}

init()







