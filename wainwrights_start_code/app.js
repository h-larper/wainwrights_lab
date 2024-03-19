const list = document.querySelector("#wainwrights-list");
let wainwrightData;

const getAllWainwrights = async () => {
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json")
    wainwrightData = await response.json();
    accessAPIForWainwrightInfo(wainwrightData);
}


const accessAPIForWainwrightInfo = (wainwrightData) => {
    wainwrightData.forEach((response) => {
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

getAllWainwrights();

const button = document.querySelector("button");
button.addEventListener("click", () => {
    getAllWainwrights();
})


//FORM CODE:
const wainwrightForm = document.querySelector("#wainwright-picker");
const returned = document.querySelector("#returnedNames");

wainwrightForm.addEventListener("submit", (evt) =>  {
    evt.preventDefault();
    const newInput = evt.target["wainwright-name"].value;
    // console.log(newInput);
    const returnedNames = wainwrightData.filter(wainright => {
        return wainright.name.toLowerCase().includes(newInput.toLowerCase());
    });
    console.log(returnedNames);
    const displayReturnedNames = document.createElement("p");
    displayReturnedNames.innerText = returnedNames;
    console.log(displayReturnedNames);
    // returned.appendChild(displayReturnedNames);
});



//TO PRINT ALL WAINRIGHTS:
//const allWainwrights = getAllWainwrights();
// console.log(allWainwrights);
