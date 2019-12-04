
// add code to read and set any environment variables with the dotenv package
require("dotenv").config();
// console.log(process.env);

// dependencies
var pf = new petfinder.Client({apiKey: "EGc3gxBpk6teIzgELn3yobiuQzodUCyieJnvK8zEj633m76rEz", secret: "TJgV9Um001Akix3x70lcFD1eO3gIQX7aAIBlIMUB"});
 
pf.animal.search()
    .then(function (response) {
        // Do something with `response.data.animals`
    })
    .catch(function (error) {
        // Handle the error
    });