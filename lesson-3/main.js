// function => handler, listener, subscriber
// - при наступлении события
// function() - вызов функции
// const event = new Event() - объект который содержит сведения о произошедшем событии
// function(event) - вызов функции
// event, ev ,e === new Event()

// [] = new Array()
// {} = new Object()
// const map = new Map()
// const set = new Set()


const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')
const a = document.getElementById('a')

// function handler_1() {
//     alert('yo')
// }
//
// function handler_2() {
//     alert('hey')
// }
//
// function handler_3(e) {
//     console.log(e.currentTarget.id)
// }

//
// function handler_3(e) {
//     if (e.target.tagName === 'BUTTON') {
//         console.log(e.target.id)
//     }
// }

function handler_3(e) {
    e.stopPropagation()
    console.log(e.currentTarget.id)
}


// const anonymus = () => handler_1('yo')
// const anonymusNext = () => handler_1('yo')
//
// sm.onclick = anonymus
// sm.onclick = anonymusNext

// sm.onclick = () => {
//     handler_1()
//     handler_2()
// }
// sm.onclick = () => handler_1()
//
// sm.addEventListener('click', handler_1)
// sm.addEventListener('click', handler_2)
// sm.removeEventListener('click', handler_1)

//
// sm.addEventListener('click', handler_3)
// md.addEventListener('click', handler_3)
// bg.addEventListener('click', handler_3)


// // Погружение
// sm.addEventListener('click', handler_3, {capture: true})
// md.addEventListener('click', handler_3,{capture: true})
// bg.addEventListener('click', handler_3,{capture: true})


// sm.addEventListener('click', handler_3, {capture: true})
// md.addEventListener('click', handler_3,{capture: false})
// bg.addEventListener('click', handler_3,{capture: true})


// sm.addEventListener('click', handler_3)

a.addEventListener('click', (e) => {
    e.preventDefault()
    alert('yoyo')
})
sm.addEventListener('click', handler_3)
md.addEventListener('click', handler_3)
bg.addEventListener('click', handler_3)

