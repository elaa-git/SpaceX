const resultsContainer = document.querySelector(".details");

const url = "https://api.spacexdata.com/v4/rockets/";


async function fetchInfo() {

    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        
        const rockets = json;

        resultsContainer.innerHTML = "";

        // Get last object number
        const lastObject = rockets.length -1;

        // Display from last object
        for (let i = 0; i < rockets.length; i++) {
            if (i === rockets) {
                break;
            }

            const rocketImages = rockets[i].flickr_images;
            const rocketName = rockets[i].name;
            const rocketHeight = rockets[i].height.meters;
            const rocketDiameter = rockets[i].diameter.meters;
            const rocketMass = rockets[i].mass.kg;
            const firstFlight = rockets[i].first_flight;
            const launchDetails = rockets[i].description;
            const wiki = rockets[i].wikipedia;

            resultsContainer.innerHTML += `<div class="rockets-result">
                                           <div class="image" style="background-image: url('${rocketImages}')"></div>
                                           <p>NAME: ${rocketName}</p>
                                           <p>HEIGHT: ${rocketHeight} meters</p>
                                           <p>DIAMETER: ${rocketDiameter} meters</p>
                                           <p>MASS: ${rocketMass} kg</p>
                                           <p>FIRST FLIGHT: ${firstFlight}</p>
                                           <p>LAUNCH DETAILS: ${launchDetails}</p>
                                           <a href="${wiki}">Wikipedia</a>
                                           </div>`;
        }
    }
    catch(error) {
        console.log(error);
        resultsContainer.innerHTML = displayError("error", error);
    }
}
    


fetchInfo();