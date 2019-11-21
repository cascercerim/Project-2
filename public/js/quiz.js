//Doggo
countDoggo = function () {
    d = $("#exampleRadios1:checked").length;
};
countDoggo();
$("input[type=radio]").on("click", countCorrect);
//Catcat
countCatcat = function () {
    c = $("#exampleRadios2:checked").length;
};
countCatcat();
$("input[type=radio]").on("click", countCorrect);
////////////////////////////////////////////////////////////////////////////////
var number = 10;
//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;
//  When the stop button gets clicked, run the stop function.
$("#stop").on("click", stop);
//  When the resume button gets clicked, execute the run function.
$("#resume").on("click", run);
//  The run function sets an interval
//  that runs the decrement function once a second.
//  *****BUG FIX********
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function start() {
    $("#start").on("click", run);
}
//  The decrement function.
function decrement() {