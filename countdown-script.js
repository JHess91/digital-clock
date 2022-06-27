let seconds;
function displayCountDown() {
    // Phase 1: Convert seconds to hh:mm:ss
    // Step 1: Find the seconds
    const second = seconds % 60
    // Step 2: Find the minute
    const minute = Math.floor(seconds / 60)
    // Step 3: Find the minute
    const hour = Math.floor(totalSeconds / 3600)
    

    const timeString = `${hour} : ${minute} : ${seconds}`
    console.log(timeString)
    seconds =- 1
    if (seconds > 0) {
    setTimeout(displayCountDown, 1000)
    }

}
// Input Seconds
// Output -> Count Backwards
seconds = 1000
displayCountDown(1000)
