
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    
    var $street = $('#street').val();
    var $city = $('#city').val();
    $greeting.text("So, you want to live at " + $street + ", " + $city + "?")
    return false;
};

$('#form-container').submit(loadData);

// loadData();
