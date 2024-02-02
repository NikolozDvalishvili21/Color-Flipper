const colors = ['Green', 'Red', 'rgba(133, 122, 200)', '#f15025', '#BE8C5D', '#BEBB47']

const btn = document.querySelector('.changer')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]

    color.style.color = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}
