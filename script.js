function updateClock(){

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12 hour format
    hours = hours % 12;
    hours = hours ? hours : 12;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("ampm").textContent = ampm;

    // Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("date").textContent = now.toLocaleDateString(undefined, options);
}

setInterval(updateClock, 1000);
updateClock();


/* Dark / Light Toggle */

const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("light")){
        toggleBtn.textContent = "Switch to Dark Mode";
    } else {
        toggleBtn.textContent = "Switch to Light Mode";
    }

});
