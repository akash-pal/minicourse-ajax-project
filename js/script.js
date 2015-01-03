
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
    
    var $street = $('#street').val();
    var $city = $('#city').val();
    $greeting.text("So, you want to live at " + $street + ", " + $city + "?");

    var $source = "https://maps.googleapis.com/maps/api/streetview?size=600x400&location=" + $street + ", " + $city ;
    $body.append('<img class="bgimg" src="' + $source + '">');

    //New York Times AJAX request

    var $url ="http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+$street+", "+$city+"&sort=newest&api-key=cffedb1973e370b99ba31c25d1e44a8c:18:70667414";
    
    $nytHeaderElem .text("New York Times Articles about " + $street + ", " + $city);

    $.getJSON($url,function(data){
       $.each(data.response.docs,function(key, value) {
            console.log(value);
            $nytElem.append('<li class="articles"></li>');
            $('.articles:last').append('<a href="'+ value.web_url +'">'+ value.snippet +'</a>');
            $('.articles:last').append('<p>'+ value.lead_paragraph +'</p>');         
       })    
    });
    return false;
};

$('#form-container').submit(loadData);

