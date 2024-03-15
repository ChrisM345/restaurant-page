export function aboutContent() {
    const content = document.querySelector("#content");
    content.innerHTML = ''

    const header = document.createElement('h3')
    header.textContent = 'About Us!'

    const about = document.createElement('p')
    about.className = 'about-p'
    about.textContent = `We hope you enjoy your time at our cafe. Any questions, please call us at 123-123-1234`

    const address = document.createElement('p')
    address.className = 'address-p'
    address.innerText = "123 My Street \n My City, My State 12345"

    content.append(header)
    content.append(about)
    content.append(address)
}