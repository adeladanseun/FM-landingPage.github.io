const menu = document.querySelector('header .menuIcon')
const nav = document.querySelector('header nav')
const users = document.querySelectorAll('.userWrapper .user')
const rings = document.querySelector('.rings')
menu.addEventListener('click', () => {
    menu.classList.toggle('cancel')
    nav.classList.toggle('show')
})
menu.addEventListener('blur', () => {
    menu.classList.remove('cancel')
    nav.classList.remove('show')
})
for (let i = 0; i < users.length; i++) {
    let element = document.createElement('span')
    element.classList.add('ring')
    if(i===0) element.classList.add('highlight')
    rings.appendChild(element)
    element.addEventListener('click', () => {
        for(let j = 0; j < rings.children.length; j++) {
            rings.children[j].classList.remove('highlight')
        }
        users[i].scrollIntoView({block: 'nearest'})
        element.classList.add('highlight')
    })
}