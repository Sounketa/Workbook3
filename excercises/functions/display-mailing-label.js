"use strict";

function displayMailingLabel(name, address, city, state, zipcode) {
    console.log(name);
    console.log(address);
    console.log(city + ",", state, zipcode);
}

displayMailingLabel("Julien Ilboudo", "123 Main Street.", "Newark", "NJ", "12345");

