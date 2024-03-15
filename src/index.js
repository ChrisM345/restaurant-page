import { homeContent } from './home.js'
import { menuContent } from './menu.js';
import { aboutContent } from './about.js';
import Pancakes from './pancakes.jpg';
import './style.css';

const contentDiv = document.querySelector('#content')
homeContent()

const bckground = document.querySelector('body');
bckground.style.backgroundImage=`url(${Pancakes})`;

const credit = document.createElement('p')
credit.textContent = 'Image Credit - https://unsplash.com/photos/brown-cookies-on-brown-wooden-table-tk9dBabQde0'
credit.className = 'credit-p'
bckground.append(credit);

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        switchPage(btn.textContent);
    })
})

function switchPage(page){
    switch(page) {
        case 'Home':
            homeContent();
            break;
        case 'Menu':
            menuContent();
            break;
        case 'About':
            aboutContent();
            break;
    }
}