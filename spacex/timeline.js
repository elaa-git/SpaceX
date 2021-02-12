const resultsContainer = document.querySelector(".details");

const url = "https://api.spacexdata.com/v4/launches/";


async function fetchInfo() {

    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        
        const launches = json;

        resultsContainer.innerHTML = "";

            // Display from last object
            for (let i = 0; i < launches.length; i++) {
                if (i === launches) {
                    break;
                }

            const flightNumber = launches[i].flight_number;
            const launchDate = launches[i].date_local.substring(10, -5);
            const rocketName = launches[i].name;
            const wikipedia = launches[i].links.wikipedia;
            const webVideo = launches[i].links.webcast;

                                           resultsContainer.innerHTML += `<div class="timeline-result">
                                                                          <p>Flight: ${flightNumber} • 
                                                                             DATE: ${launchDate} • 
                                                                             NAME: ${rocketName} • 
                                                                          <a href="${wikipedia}">Wikipedia</a> •
                                                                          <a href="${webVideo}">YouTube</a></p>
                                                                          </div>`;

        }
    }
    catch(error) {
        console.log(error);
        resultsContainer.innerHTML = displayError("error", error);
    }
}
    

fetchInfo();