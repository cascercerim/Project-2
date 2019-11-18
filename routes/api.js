// Import module
require('dotenv').config()
let petfinder = require('pet-finder-api')('api_key','api_secret');
 
const keys = require("./keys.js");

// Get list of breeds
petfinder.getAnimals('animals', function(err, response) {
  console.log(response)
});

// animal = barnyard, bird, cat, dog, horse, pig, reptile, smallfurry
// getBreedList( animal, callback )
// getPet( petId, options, callback )
// getRandomPet ( options, callback )
// findPet ( location, options, callback )


function getPets() {                                                      // display content 

    let petfinder = $(this).attr("data-name");
    let queryURL = "http://api.petfinder.com/v2/animals?&api_key=" + keys + userInput + "&limit=10";
    //or "...animals?key= 
    // or GET this way??  GET https://api.petfinder.com/v2/{CATEGORY}/{ACTION}?{parameter_1}={value_1}&{parameter_2}={value_2}


    $.ajax({                                                              //ajax call for giphy API
        url: queryURL,
        method: "GET"
    }).then(function (response) {                                         // data return from API
        console.log(response);
        let response = response.data;                                     // array of results returned 

        for (let i = 0; i < response.length; i++) {                       // loop results of the array for individual animal attributes
            // let variables = all attr you want in response;             // container for the response data  see the giphy activity
            let ???Holder = $("<div class='????'>");                                 
            let ???Img = $("<img class='animalImg'>");                         // image tag
            // animalImg.attr("??needed"); 
            console.log(animalImg);                                   
             
            // list other variables type, breed, size, gender, age,color, coat, status, name, organization, good_with_children(boolean), good_with_dogs(or cats, also boolean),see others @ https://www.petfinder.com/developers/v2/docs/#get-animal-types
            let _____ = response[i].______;                              // ratings to display for the gifs
           }

    })

}
