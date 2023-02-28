let buyTickets = document.querySelectorAll(".js-buyticket")
let buyTicketModal = document.querySelector('#buyTicketModal')
let buyTicketCtn = document.querySelector('#buyticket-ctn')

for (let i = 0; i < buyTickets.length; i++) {
    buyTickets[i].addEventListener('click', () => {
        buyTicketModal.style.display = 'flex'
        setTimeout(() => {buyTicketCtn.classList.add('open')}, 10)
    })
}

document.querySelector('#close').addEventListener('click', () => {
    buyTicketModal.style.display = 'none'
    buyTicketCtn.classList.remove('open')
})

let sildes = document.querySelectorAll('.slide')

setInterval(() => {
    changeSlide(getSlide(sildes))
}, 3000)

function getSlide(slides) {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].style.display == 'block') {
            return [slides[i],
            slides[i === 2 ? 0 : i + 1]]
        }
    }
}

function changeSlide(slides) {
    slides[0].style.display = 'none'
    slides[1].style.display = 'block'
}

let head = document.querySelector('#heading');
let menuBTN = document.querySelector('.menu-btn');
menuBTN.addEventListener('click', () => {
    let isOpenMenu = head.style.overflowY === 'hidden' || head.style.overflowY === '';
    if (isOpenMenu) {
        head.style.overflow = 'visible'
    } else {
        head.style.overflow = 'hidden'
    }
})

let headItem = document.querySelectorAll('#heading li')
for (let i = 0; i < headItem.length; i++) {
    if (i !== headItem.length - 1)
        headItem[i].addEventListener('click', () => {
            head.style.overflow = 'hidden'
        })
}

let main = document.querySelector('#main');
main.addEventListener('click', () => {
    head.addEventListener('click', (e) => { e.stopPropagation() })
    head.style.overflow = 'hidden'
})

// headItem[headItem.length - 1].addEventListener('click', (e) => {
//     let isOpenSubMenu = e.target.lastElementChild.style.display === 'block'
//     if (isOpenSubMenu) {
//         e.target.lastElementChild.style.display = 'none'
//     } else {
//         e.target.lastElementChild.style.display = 'block'
//     }
//     console.log(isOpenSubMenu)
// })