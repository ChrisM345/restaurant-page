import divContent from './main-page.js'
import Pancakes from './pancakes.jpg';
import './style.css';
console.log("testing")

const bckground = document.querySelector('body');

bckground.style.backgroundImage=`url(${Pancakes})`;

const credit = document.createElement('p')
credit.textContent = 'Image Credit - https://unsplash.com/photos/brown-cookies-on-brown-wooden-table-tk9dBabQde0'

bckground.append(credit);

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log("pressed")
    })
})