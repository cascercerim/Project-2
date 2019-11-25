
// add code to read and set any environment variables with the dotenv package
require("dotenv").config();
// console.log(process.env);

// dependencies
let petfinder = require("@petfinder/petfinder-js");

// Add the code required to import the `keys.js` file and store it in a variable
const keys = require("./keys.js");
let client = new petfinder.Client(keys.petfinder);

// @petfinder API Call
client.animal.search({photos: ["small"]})
    .then(function (response) {
        // Do something with `response.data.animals`
        console.log(response.data)
    })
    .catch(function (error) {
        // Handle the error
        console.log(error);
    });
