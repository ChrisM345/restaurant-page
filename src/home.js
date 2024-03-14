export function homeContent() {
    console.log("homecontent")
    const content = document.querySelector("#content");
    const header = document.createElement('h3')
    header.textContent = 'Pancake Bee Cafe'

    // const myImage = new Image();
    // myImage.src = Pancakes
    // myImage.className = 'background-image'

    const intro = document.createElement('p')
    intro.textContent = 'Welcome to Pancake Bee Cafe. We believe in simple ingredients, generous portions, and excellent customer service. Please come visit our cozy cafe and enjoy a lovely breakfast with us.'

    content.append(header)
    // content.append(myImage)
    content.append(intro)

    return content
}