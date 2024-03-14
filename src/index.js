import {homeContent} from './home.js'
import Pancakes from './pancakes.jpg';
import './style.css';
console.log("testing")

const contentDiv = document.querySelector('#content')
homeContent()

const bckground = document.querySelector('body');
bckground.style.backgroundImage=`url(${Pancakes})`;

const credit = document.createElement('p')
credit.textContent = 'Image Credit - https://unsplash.com/photos/brown-cookies-on-brown-wooden-table-tk9dBabQde0'
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
            console.log("home")
            break;
        case 'Menu':
            console.log("menu")
            break;
        case 'About':
            console.log("about")
            break;
    }
}