export function aboutContent() {
    const content = document.querySelector("#content");
    content.innerHTML = ''

    const header = document.createElement('h2')
    header.textContent = 'About Us!'

    const about = document.createElement('p')
    about.textContent = `We'll make sure you'll want to come back`

    const address = document.createElement('p')
    address.innerText = "123 My Street \n My City, My State 12345"

    let teaHTML = `<div class = "menu-item"
    <h4>Tea</h4>
    <p>Enjoy a lovely cup of tea and a variety of flavors. Refills are included!</p>
    <p>$3.00</p>`

    content.append(header)
    content.append(about)
    content.append(address)
}