// document.querySelector(".btn").addEventListener("click", () => {
//     var s = 0;
//     var m = 0;
//     var h = 0;
//     const timerElement = document.querySelector(".time");

//     function updateTimer() {
//         if (s <= 59) {
//             timerElement.textContent = "00 Hrs : 00 Minutes : " + s + " seconds";
//             s = s+1;
//             setTimeout(updateTimer, 1000);
//         }
//     }

//     function updateTimerMinute() {
//         if (m <= 59) {
//             timerElement.textContent = "00 Hrs : " + m + " Minutes : " + s + " seconds";
//             m = m+1;
//             setTimeout(updateTimerMinute, 60000);
//         }
//     }

//     function updateTimerHour() {
//         if (h <= 59) {
//             timerElement.textContent = h + " Hrs : " + m + " Minutes : " + s + " seconds";
//             h = h+1;
//             setTimeout(updateTimerHour, 3600000);
//         }
//     }

//     updateTimer();
// });

document.querySelector(".btn").addEventListener("click", () => {
    var s = 0;
    var m = 0;
    var h = 0;
    const timerElement = document.querySelector(".time");

    function updateTimer() {
        if (s <= 59) {
            timerElement.textContent = "00 Hrs : " + m.toString().padStart(2, "0") + " Minutes : " + s.toString().padStart(2, "0") + " seconds";
            s++;
            setTimeout(updateTimer, 1000);
        } else {
            if (m <= 59) {
                m++;
                s = 0;
                setTimeout(updateTimer, 1000);
            } else {
                h++;
                m = 0;
                setTimeout(updateTimer, 1000);
            }
        }
    }

    updateTimer();
});
