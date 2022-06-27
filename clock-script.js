function displayCountDown() {
    // Phase 1: Get the current time

    let currentDate = new Date()

    // 1. Retrieve the hour from current date

    let hours = currentDate.getHours() // this is given in military time (0-23)
   

    // 2. Retrieve the minute from current date

    let minutes = currentDate.getMinutes()

    // 3. Retrieve the seconds from current date

    let seconds = currentDate.getSeconds()
    
    // Phase 2: convert military time to standard time (e.g. 06:33:10 pm or 09:33:10 am)

    let timeOfDay = 'AM'

    if (hours === 0 ) {
        hours = 12
    } else if (hours > 11) {
        timeOfDay = 'PM'
        hours = hours === 12 ? 12 : hours - 12 
    }

    // display it in 00:00:00 string format

    let hourString = hours < 10 ? `0${hours}` : `${hours}`
    let minuteString = minutes < 10 ? `0${minutes}` : `${minutes}`
    let secondString = seconds < 10 ? `0${seconds}` : `${seconds}`

    let timeString = `${hourString} : ${minuteString} : ${secondString}  ${timeOfDay}`


    
      
     
     //Phase 3: Use DOM to update the HTML element

    const myClock = document.getElementById('clock').innerHTML = timeString

    // Phase 4: Run the function very 1 second
    // this is in milliseconds; 1 sec = 1000 milliseconds
    setTimeout(displayCountDown, 1000)
}
displayCountDown()


// function displayMDY () {
//     const month = currentDate.getDate()

//     const day = currentDate.getDay()

//     const year = currentDate.getYear()


// }