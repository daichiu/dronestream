/**
 * Created by h205p2 on 5/19/17.
 */

/*$(document).ready(function() {
    $.ajax({
        url: ["https://maps.googleapis.com/maps/api/js?key=AIzaSyAFtlrU91318DZ8cBgzgxlo4G4RhCG_6xY&callback=myMap"],
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function(result) {
            console.log(result)
        },
        error: function() {
            alert('Failed!');
        }
    });
})*/


function myMap() {
    var mapProp = {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
