const list = document.querySelector("#wainwrights-list");

const getAllWainwrights = async () => {
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json")
    const jsonData = await response.json();
    accessAPIForWainwrightInfo(jsonData);
}


const accessAPIForWainwrightInfo = (jsonData) => {
    jsonData.forEach((response) => {
        const wainwrightName = document.createElement("li");
        wainwrightName.innerText = response.name;
        list.appendChild(wainwrightName);

        const wainwrightHeight = document.createElement("p");
        wainwrightHeight.innerText = "Height in metres: " + response.heightMetres;
        wainwrightName.appendChild(wainwrightHeight);

        const wainwrightHeightFeet = document.createElement("p");
        wainwrightHeightFeet.innerText = "Height in feet: " + response.heightFeet;
        wainwrightName.appendChild(wainwrightHeightFeet);

        const wainwrightLatitude = document.createElement("p");
        wainwrightLatitude.innerText = "Latituide: " + response.latitude;
        wainwrightName.appendChild(wainwrightLatitude);

        const wainwrightLongitude = document.createElement("p");
        wainwrightLongitude.innerText = "Longitude: " + response.longitude;
        wainwrightName.appendChild(wainwrightLongitude);
    });
}


const button = document.querySelector("button");
button.addEventListener("click", () => {
    getAllWainwrights();
})

//FORM CODE:
const wainwrightForm = document.querySelector("#wainwright-picker");

wainwrightForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    console.log(evt.target["wainwright-name"].value);
})



//TO PRINT ALL WAINRIGHTS:
//const allWainwrights = getAllWainwrights();
// console.log(allWainwrights);
