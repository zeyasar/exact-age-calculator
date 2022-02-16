const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const loading = document.querySelector(".loading");
const countdown = document.querySelector("#countdown")



window.addEventListener("load", ()=>{
    loading.style.display = "block";
    setTimeout(()=>{
        loading.style.display = "none";
        countdown.style.display = "flex";
    },1000)
})

let selectedBirthday = new Date();
let birthdayInput = document.querySelector("input[name=birthday]");
birthdayInput.addEventListener("change", (event) => {
    selectedBirthday = new Date(event.target.value);
    if (selectedBirthday > new Date()) {
        alert("You cannot be born after this day!!")
        return;
    }
    document.body.style.backgroundImage = "url('https://picsum.photos/id/175/800/400')";

    loading.style.display = "block";
    setInterval(updateCountdown, 1000);
    setTimeout(() => {
        loading.style.display = "none";
    },1000)
});
const updateCountdown = () => {
    
    let dobYear = selectedBirthday.getFullYear();
    let dobMonth = selectedBirthday.getMonth();
    let dobDay = selectedBirthday.getDate();
    let dobHour = selectedBirthday.getHours();
    let dobMinute = selectedBirthday.getMinutes();
    let dobSecond = selectedBirthday.getSeconds();


    let now = new Date();

    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();
    let currentDay = now.getDate();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();
    let currentSecond = now.getSeconds();


    let secondOfAge = currentSecond - dobSecond;
    let minuteOfAge = currentMinute - dobMinute;
    let hourOfAge = currentHour - dobHour;
    let dayOfAge = currentDay - dobDay;
    let monthOfAge = currentMonth - dobMonth;
    let yearOfAge = currentYear - dobYear;

    if (dayOfAge < 0) {
        dayOfAge += 30;
        monthOfAge --;
    }
    if (monthOfAge < 0) {
        monthOfAge += 12;
        yearOfAge--;
    }


    years.innerHTML = yearOfAge.toString().padStart(2,"0");
    months.innerHTML = monthOfAge.toString().padStart(2,"0");
    days.innerHTML = dayOfAge.toString().padStart(2,"0");
    hours.innerHTML = hourOfAge.toString().padStart(2,"0");
    minutes.innerHTML = minuteOfAge.toString().padStart(2,"0");
    seconds.innerHTML = secondOfAge.toString().padStart(2,"0");

}

  

