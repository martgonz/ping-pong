
//Business
function countPingPong(count){
  $("#output").text("");
  for(var i = 0; i <=count; i++){
    var printedNumber = 0;
    if(i % 3 === 0) {
      printedNumber = "ping";
    } else if (i % 5 === 0) {
      printedNumber = "pong";
    }  else {
      printedNumber = i;
    }
    $("#output").append(printedNumber + "<br>");
  }
}

//Front-End
$(document).ready(function() {
  $("#count").submit(function(event) {
    event.preventDefault();
    var count = parseInt($("#newNumber").val());
    countPingPong(count);
  });
});
