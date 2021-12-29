console.log('Client side javascript file is loaded!')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })


// fetch('http://localhost:3000/weather?address=Austin').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log("this is an error")
//         } else {
//             console.log(data.forecast)
//             console.log(data.address)
//         }
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messagesOne = document.querySelector('#message-1')
const messagesTwo = document.querySelector('#message-2')

// messagesOne.textContent = city

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messagesOne.textContent = 'Loading...'
    messagesTwo.textContent = ''
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messagesOne.textContent = error
            } else {
                // console.log(data.location)
                messagesOne.textContent = data.location
                messagesTwo.textContent = data.forecast

            }
        })
    })
})