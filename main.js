var daysEl = document.getElementById('days')
var hoursEl = document.getElementById('hours')
var minutesEl = document.getElementById('minutes')
var secondsEl = document.getElementById('seconds')

function countdownTime() {
    const countDownDate = new Date('05/15/2025').getTime()

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const interval = setInterval(() => {
        const now = new Date().getTime()
        const distance = countDownDate - now
    
        daysEl.innerText = formatNumber(Math.floor(distance / day))
        hoursEl.innerText = formatNumber(Math.floor((distance % day) / hour))
        minutesEl.innerText = formatNumber(Math.floor((distance % hour) / minute))
        secondsEl.innerText = formatNumber(Math.floor((distance % minute) / second))
        if (distance < 0) {
            
        }
    }, 10);

}

function formatNumber(number) {
    if (number < 10) {
        return '0' + number
    }

    return number
}

countdownTime()