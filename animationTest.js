$(".myButtonR").click(function(){
    $("#jiggly").animate({left: "+=100px"});
});

$(".myButtonL").click(function(){
    $("#jiggly").animate({left: "-=100px"});
});


$(".myButtonA").click(function(){
    $("#jiggly").animate({left: "0"}, "fast");
    $("#jiggly").animate({left: "800px"}, "slow");

});