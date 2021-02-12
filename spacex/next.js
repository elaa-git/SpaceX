const detailContainer = document.querySelector(".details");

const url = "https://api.spacexdata.com/v4/launches/next";


async function fetchInfo() {

    try {
        const response = await fetch(url);
        const details = await response.json();
        createHtml(details);

        // Countdown
        const nextLaunch = details.date_local;

        // Date counting down to
        const countDownDate = new Date(nextLaunch).getTime();
        const x = setInterval(function() {

        // Today's date and time
        const now = new Date().getTime();
          
        // Distance between now and the count down date
        const distance = countDownDate - now;
          
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
        // Display the result in the element with id="countdown"
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
          
        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);

// If error
    } catch(error) {
        console.log(error);
        detailContainer.innerHTML = displayError("error", error);
    }
    
}

// Send data to HTML
fetchInfo();

function createHtml(details) {
    detailContainer.innerHTML = `<div class="next-result">
                                 <div class="image" style="background-image: url('${details.links.patch.small}')"></div>
                                 <p class="date">DATE: ${details.date_local.substring(10, -5)}</p>
                                 <p class="date">TIME: ${details.date_local.substring(11)}</p>
                                 <p class="name">NAME: ${details.name}</p>
                                 <p class="date">DETAILS: ${details.details}</p>
                                 <a href="${details.links.wikipedia}">Wikipedia</a>
                                 </div>`
}