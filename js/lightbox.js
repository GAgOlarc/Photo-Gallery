//Problem : User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Ligthbox

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img id="image">');
//var $caption = $("<p></p>");
var $title = $('<p id="title"></p>');
var $leftArrow = $('<img id="previous" src="photos/left_arrow.png">');
var $rightArrow = $('<img id="next" src="photos/right_arrow.png">');

// Variable to keep track of which overlay
// image is in use
var $index = 0;

//An image to overlay
$overlay.append($image);

//A caption to overlay
//$overlay.append($caption);

//A title to overlay
$overlay.append($title);

////Arrows to overlay
$overlay.append($leftArrow);
$overlay.append($rightArrow);

//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$("#imageGallery a").click(function (event) {
    event.preventDefault();

    var imageLocation = $(this).attr("href");
    var imageTitle = $(this).attr("title");

    //Update overlay with the image linked in the link
    $image.attr("src", imageLocation);

    //Update overlay with the title
    $title.text(imageTitle);

    //Show the overlay
    $overlay.show();

});
  

//When overlay is clicked 
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
});

//Capture the click event on the arrows
$("#previous").click(function () {
    var href = $(this).attr("href");
    console.log(href)
});

$("#next").click(function () {
    var href = $(this).attr("href");
    console.log(href)
});