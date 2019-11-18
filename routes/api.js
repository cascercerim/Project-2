// Import module
require('dotenv').config()
var petfinder = require('pet-finder-api')('api_key','api_secret');
 
// Get list of breeds
petfinder.getBreedList('cat', function(err, breeds) {
  console.log(breeds)
});

// animal = barnyard, bird, cat, dog, horse, pig, reptile, smallfurry
// getBreedList( animal, callback )
 
// getPet( petId, options, callback )
// getRandomPet ( options, callback )
// findPet ( location, options, callback )

const keys = require("./keys.js");

function getPets() {                                                      // display content 

    let petfinder = $(this).attr("data-name");
    let queryURL = "http://api.petfinder.com/my.method?key=12345&arg1=foo" + userInput + "&api_key=Aunvr19ZrKnV6rmZATqD5j8hzwTeGScI&limit=10";

    $.ajax({                                                              //ajax call for giphy API
        url: queryURL,
        method: "GET"
    }).then(function (response) {                                         // data return from API
        console.log(response);
        var response = response.data;                                     // array of results returned 

        for (var i = 0; i < response.length; i++) {                       // loop results of the array for individual topics
            // var giphyDiv = $("#gifsHere");                                // container for the individual gifs
            var gifHolder = $("<div class='inline'>");                                 
            var gifImg = $("<img class='animatedGIF'>");                         // image tag
            gifImg.attr("data-state", "still"); 
            console.log(gifImg);                                   
            gifImg.attr("src", response[i].images.fixed_height_still.url);    //src attribute of results data properties
            gifImg.attr("data-still", response[i].images.fixed_height_still.url);
            gifImg.attr("data-animate", response[i].images.fixed_height.url);
            
            var rating = response[i].rating;                              // ratings to display for the gifs
            var ratingCopy = $("<p>").text("Rating: " + rating);          // p tag for ratings display on html
            
            gifHolder.append(ratingCopy);                                  // adds the rating and image to the giphyDiv
            gifHolder.append(gifImg);
            $("#gifsHere").prepend(gifHolder);                             // 'prints giphy to html
        }
        $(".animatedGIF").on("click", function () {                             //setting up the still/animate/still function
            
            var state = $(this).attr("data-state");
    
            if (state === "still") {                                             // If the image's state is still, update its src attribute to what its data-animate value is. 
                $(this).attr("src", $(this).attr("data-animate"));               // Then, set the image's data-state to animate
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));                 // Else set src to the data-still value
                $(this).attr("data-state", "still");
            }
        })
    })

}
