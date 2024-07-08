
$(".sidebar-toggle").click(function(){
    $(".sidebar").toggleClass("show-sidebar");
    $(".sidebar-toggle").toggleClass("sidebar-toggle-show");
    $(".text").toggleClass("text-show");
})
$(".close-btn").click(function(){
    $(".sidebar").removeClass("show-sidebar");
    $(".sidebar-toggle").removeClass("sidebar-toggle-show");
    $(".text").removeClass("text-show");
})

$('.div-contain').click(function(){
    $('.div-drop').not( $(this).children('.div-drop')).slideUp();
    $(this).children('.div-drop').slideToggle();
})

$(document).ready(function(){
    var counter = 59;
    setInterval(function(){
        counter--;
        $("#sec").html(counter);
        if(counter === 0){
            counter = 59;
        }
    }, 10);
    var min =59;
setInterval(function(){
        min--;
        $("#min").html(min);
        if(min === 0){
            min = 59;
        }
    }, 1000);

})

// function displaySec(){
//     for(i=58;i>=0;i--){
//         $("#sec").html(i);
//     }
// }

