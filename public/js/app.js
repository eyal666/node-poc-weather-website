console.log('Client side js file is loaded')

const fetchWeather = (address, callback) => {
    //fetch API
    fetch(`http://localhost:3000/weather?address=${address}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                callback(undefined, data.error)
            } else {
                callback(data, undefined)
            }
        })
    })
}



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    p1.textContent = 'Loading...'
    p2.textContent = ''

    fetchWeather(location, (data, error) => {
        if (error) {
            p1.textContent = error
        } else {
            p1.textContent = data.location
            p2.textContent = data.forecast
        }
    })
})