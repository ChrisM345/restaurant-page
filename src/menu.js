export function menuContent() {
    console.log("menucontent")
    const content = document.querySelector("#content");
    const header = document.createElement('h2')
    header.textContent = 'Menu'

    const beverages = document.createElement('h3')
    beverages.textContent = 'Beverages'

    let teaHTML = `<div class = "menu-item"
    <h4>Tea</h4>
    <p>Enjoy a lovely cup of tea and a variety of flavors. Refills are included!</p>
    <p>$3.00</p>`

    content.innerHTML = teaHTML
}