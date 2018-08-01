"use strict";
$(() => {
  let currentTable = null;
  let mouseX;
let mouseY;
$(document).mousemove( function(e) {
   mouseX = e.pageX; 
   mouseY = e.pageY;
});

  for (let i = 0; i < 9; i++) {
    $("#table").append(`<div>${(i+1)}</div>`);
  }

  $("#table div").attr("class","tabledivs available");

  $("body").on("click", "#table div.available", (e) => {
    $("#seatform").show();
    console.log(e.target);
    $("#seatform #seatforminfo form p").text(`Table Number: ${$(e.target).text()}`);
    currentTable = $(e.target);
  });


  

  $("body").on("click", "#seatforminfo img:first, #seatforminfo button:first", (e) => {
    $("#seatform").hide();
    if (e.target.tagName === "BUTTON") {
      currentTable
        .removeClass("available")
        .addClass("reserved")
        .data("guest-name", $("input").eq(0).val())
        .data("guest-phone", $("input").eq(1).val())
        .data("guest-size", $("input").eq(2).val())
    }
  });


  $("body").on("mouseover", "#table div.reserved", (e)=>{

  let  mouseX = e.pageX; 
  let mouseY = e.pageY;
    $(e.target).css("cursor", "not-allowed");
   
    
      $('.guest-details').css({'top':mouseY,'left':mouseX}).fadeIn('slow');
    
    $(e.target).css(" {top:mouseY, left:mouseX}", ".guest-details", ).fadeIn('slow');
    $(".guest-details").append(`<p>Name: ${$(e.target).data("guest-name")}
    <p>Size of Party:${$(e.target).data("guest-size")}
    `);
  



// )(function(e){
//     $('.guest-details').css({'top':mouseY,'left':mouseX}).fadeIn('slow');
//     $(".guest-details").append(`<p>Name: ${$(e.target).data("guest-name")}
//     <p>Size of Party:${$(e.target).data("guest-size")}
//     `);
  

  

  // $("body").on("mouseenter mouseleave", "#table div.reserved", (e) => {
  //   $(e.target).css("cursor", "not-allowed");

  //   $(".guest-details").show();

    // $(".guest-details").append(`<p>Name: ${$(e.target).data("guest-name")}
    // <p>Size of Party:${$(e.target).data("guest-size")}
    // `);

   
    

// $("#table div.reserved").hover(function(){
//   $(".guest-details").show();
//   $(".guest-details").append(`<p>Name: ${$(e.target).data("guest-name")}
//   <p>Size of Party:${$(e.target).data("guest-size")}
//   `);
// })

  
    
    // $(".guest-details p").eq(0).text($(e.target).data("guest-name"));
    // $(".guest-details p").eq(1).text($(e.target).data("guest-phone"));
    // $(".guest-details p").eq(2).text($(e.target).data("guest-size"));
    // console.log($("guest-details"))
    // console.log($(e.target).data("guest-name"));
    // console.log($(e.target).data("guest-phone"));
    // console.log($(e.target).data("guest-size"));
    
  });
  

});