 $(document).ready(function(){
    $('.text').css('transform','translateX(0)');
});

$(document).ready(function(){
   $('#mostrar').click(function(){
    $('.menu').slideToggle(500, function(){
       console.log('aea'); 
    });
   });
});

