console.log('Client side javascript file is loaded!')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messagesOne = document.querySelector('#message-1')
const messagesTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messagesOne.textContent = 'Loading...'
    messagesTwo.textContent = ''
    fetch('/weather?address=' + location).then((response) => {
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