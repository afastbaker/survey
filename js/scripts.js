$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var name1Input = $("input#name1").val();
    var name2Input = $("input#name2").val();
    var beverage = $("#beverage").val();
    console.log(beverage);

    var flavor = $("input:radio[name=flavor]:checked").val();
    console.log(flavor);
    //
    // var dob = $("#born").val();
    //
    // var favoriteColor = $("#color").val();


    $(".name1").text(name1Input);
    $(".name2").text(name2Input);
    $(".beverage").text(beverage);
    $(".flavor").text(flavor);

    $("#story").show();

    event.preventDefault();
  });
});
