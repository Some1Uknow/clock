document.querySelector(".btn").addEventListener("click", () => {
    var s = 0;
    var m = 0;
    var h = 0;
    const timerElement = document.querySelector(".time");

    function updateTimer() {
        if (s <= 59) {
            timerElement.textContent = "00 Hrs : " + m.toString().padStart(2, "0") + 
                " Minutes : " + s.toString().padStart(2, "0") + " seconds";
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
