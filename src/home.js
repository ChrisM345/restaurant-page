export function homeContent() {
    const content = document.querySelector("#content");
    content.innerHTML = '';
    const header = document.createElement('h3')
    header.textContent = 'Pancake Bee Cafe'

    const intro = document.createElement('p')
    intro.className = 'intro-p';
    intro.textContent = 'Welcome to Pancake Bee Cafe. We believe in simple ingredients, generous portions, and excellent customer service. Please come visit our cozy cafe and enjoy a lovely breakfast with us.'

    content.append(header)
    content.append(intro)
}