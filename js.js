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
 for(var i = 0; i<result.strike.length;i++){
   if(result.strike[i].country === "Somalia"){
       console.log(result.strike[i])
   }
 }
}
