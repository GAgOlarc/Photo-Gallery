//Problem : User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Ligthbox

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img id="image">');
var $title = $('<p id="title"></p>');
var $leftArrow = $('<img id="previous" src="photos/left_arrow.png">');
var $rightArrow = $('<img id="next" src="photos/right_arrow.png">');

// Variable to keep track of which overlay
// image is in use
var $index = 0;

// Get number of images on page so we know when we are at last image
var $galleryLength = $("#imageGallery a").length - 1;

//Function to update overlay image and caption
var updateImage = function(imageLocation, imageTitle){
  //update image
  $image.attr("src", imageLocation);
  //update caption
  $title.text(imageTitle);
};

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

    //update index to current selected image	
    $index = $(this).parent().index();

    /* Update overlay image and caption
    with the image that was clicked on
    by using updateImage function */
    updateImage(imageLocation, imageTitle);

    //Show the overlay
    $overlay.show();
});

//Arrows function
var arrows = function (left) {
    //set arrows to true to move backwards in the index

    // if right arrow is clicked, add 1 to index
    // else (if left arrow is clicked) subtract 1
    if (!left) { $index++; }
    else { $index--; }

    //if out of index reset
    if ($index < 0) { $index = $galleryLength; }
    if ($index > $galleryLength) { $index = 0; }

    // Get next <a>
    var newImageSelected = $("#imageGallery a").get($index);

    //grab link information
    var imageLocation = $(newImageSelected).attr("href");
    var imageTitle = $(newImageSelected).attr("title");

    //Update Overlay
    updateImage(imageLocation, imageTitle);
}

//BUTTON EVENTS
	// if left arrow or key 37 is pressed, go left
	// if right arrow or key 39 is pressed, go right

$(document).on( "keydown", function( event ) {

		// left keydown
		if (event.which === 37) {
			arrows(true);
		}
		// right keydown
		if (event.which === 39) {
			arrows();
		}
});

//Left arrow click
$("#previous").click(function(event){
  arrows(true);
});

//Right arrow click
$("#next").click(function(event){
  arrows();
});


//When overlay is clicked 
$overlay.click(function(event){
  //Hide the overlay
  if(event.target.id == "overlay")
    $(this).hide();
});








