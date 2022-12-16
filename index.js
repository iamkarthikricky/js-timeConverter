let hoursInputE1 = document.getElementById("hoursInput");
let minutesInputE1 = document.getElementById("minutesInput");
let convertBtnE1 = document.getElementById("convertBtn");
let timeInSecondsE1 = document.getElementById("timeInSeconds");
let errorMsgE1 = document.getElementById("errorMsg");

convertBtnE1.addEventListener("click", verifyData);

function convertToSeconds() {
    let hours = parseInt(hoursInputE1.value);
    let minutes = parseInt(minutesInputE1.value);

    let timeInSeconds = ((hours) * 60 + (minutes) * 60);
    timeInSecondsE1.classList.add("time-in-seconds");
    timeInSecondsE1.textContent = timeInSeconds;
    errorMsgE1.textContent = "";
}


function verifyData() {
    if (hoursInputE1.value === "") {
        errorMsgE1.classList.add("error");
        errorMsgE1.textContent = "Please enter a valid number of hours";
        timeInSecondsE1.classList.remove("time-in-seconds");
        timeInSecondsE1.textContent = "";
    } else if (minutesInputE1.value === "") {
        errorMsgE1.classList.add("error");
        errorMsgE1.textContent = "Please enter a valid number of minutes";
        timeInSecondsE1.classList.remove("time-in-seconds");
        timeInSecondsE1.textContent = "";
    } else {
        convertToSeconds();
    }

}