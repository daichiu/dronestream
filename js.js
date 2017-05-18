/**
 * Created by h205p2 on 5/18/17.
 */
$(document).ready(function(){
    $.ajax({
        url: ["http://api.dronestre.am/data"],
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function(result) {
            console.log(result);
            drone(result)
        },
        error: function() {
            alert('Failed!');
        }
    });
});
function drone(result){

}
