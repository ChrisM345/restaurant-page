export function menuContent() {
    const content = document.querySelector("#content");
    const header = document.createElement('h3')
    header.textContent = 'Menu'

    const beverages = document.createElement('h2')
    beverages.textContent = 'Beverages'

    let teaHTML = `<div class = "menu-item"
    <h4>Tea</h4>
    <p>Enjoy a lovely cup of tea and a variety of flavors. Refills are included!</p>
    <p>$3.00</p></div>`

    let coffeHtml = `<div class = "menu-item"
    <h4>Coffee</h4>
    <p>Enjoy a lovely cup of coffee to start off the day. Refills are included!</p>
    <p>$4.00</p></div>`

    let pancakesHTML = `<div class = "menu-item"
    <h4>Pancakes</h4>
    <p>A stack of pancakes and syrup with a side of fruit.</p>
    <p>$12.00</p></div>`

    let eggsHTML = `<div class = "menu-item"
    <h4>Eggs</h4>
    <p>Three eggs any style with a side of hash browns</p>
    <p>$15.00</p></div>`

    content.innerHTML = teaHTML + coffeHtml + pancakesHTML + eggsHTML
}