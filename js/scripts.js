$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var name1Input = $("input#name1Input1").val();
    var name2Input = $("input#name2").val();


    $(".name1").text(name1Input);
    $(".name2").text(name2Input);

    var beverage = $("#beverage").val();

    $("#story").show();

    event.preventDefault();
  });
});
