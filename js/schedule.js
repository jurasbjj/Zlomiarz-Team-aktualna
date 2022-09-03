$('.table-schedule td').addClass('active');
$('.table-schedule td div').addClass('active');




// const d = new Date();
// let day = d.getDay();

// 

day=2

if (day = 6){
  $(".saturday").addClass('on')
  $(".day-week").text("Sobota");
  day=1
}
else if (day = 5){
  $(".friday").addClass('on')
  $(".day-week").text("Piątek");
}
else if (day = 4){
  $(".thursday").addClass('on')
  $(".day-week").text("Czwartek");
}
else if (day = 3){
  $(".wednesday").addClass('on')
  $(".day-week").text("Środa");
}
else if (day = 2){
  $(".tuesday").addClass('on')
  $(".day-week").text("Wtorek");
}
else if (day = 1){
  $(".monday").addClass('on')
  $(".day-week").text("Poniedziałek");
}








 $( ".arrow" ).click(function() {
   $( ".monday, .tuesday, .wednesday, .thursday, .friday, .saturday" ).removeClass('on');
  console.log(day)

  if (day==7){
    day=1
  }
  
  if (day==1){
    $('.monday').addClass('on');
    $(".day-week").text("Poniedziałek");
    $('tr:nth-of-type(5)').height($('tr:nth-of-type(7)').height())



    
  }
  if (day==2){
    $('.tuesday').addClass('on');
    $(".day-week").text("Wtorek");
    $('tr:nth-of-type(5)').height($('tr:nth-of-type(7)').height())

  

  }
  if (day==3){
    $('.wednesday').addClass('on');
    $(".day-week").text("Środa");
    $('tr:nth-of-type(5)').height($('tr:nth-of-type(7)').height())

  

  }
  if (day==4){
    $('.thursday').addClass('on');
    $(".day-week").text("Czwartek");
    $('tr:nth-of-type(5)').height($('tr:nth-of-type(7)').height())  
  }
  if (day==5){
    $('.friday').addClass('on');
    $(".day-week").text("Piątek");
    $('tr:nth-of-type(5)').height($('tr:nth-of-type(7)').height())
  }
  if (day==6){
    $('.saturday').addClass('on');
    $(".day-week").text("Sobota");
  }

  day++



 });



$(function(){
  // Bind the swiperightHandler callback function to the swipe event on div.box
$( ".swiper" ).on( "swiperight", swiperightHandler );

// Callback function references the event target and adds the 'swiperight' class to it
function swiperightHandler( event ){
  $( '.swiper' ).addClass( "active" );
}
});


$('.swiper').click(function() {
  $('.swiper').addClass('active');
});
$('.swiper').mouseover(function() {
  $('.swiper').addClass('active');
});
$(".swiper").on("swipe",function(){
  $('.swiper').addClass('active');
});

$('.select-type div').click(function () {
  $('.table-schedule tr:not(:nth-of-type(1)) td').removeClass('active');
  $('.table-schedule td.divided div').removeClass('active');
  $('.swiper').addClass('active');

  $('.select-type .dot').removeClass('active')
  $('.white-fade').removeClass('active')

})

$('.select-type div:nth-of-type(1)').click(function () {
  $('.select-type div:nth-of-type(1) .dot').addClass('active')
  $('.select-selected').text("Wszystkie zajęcia")
  $('.table-schedule tr:not(:nth-of-type(1)) td').addClass('active');
  $('.table-schedule td.divided div').addClass('active');
})

$('.select-type div:nth-of-type(2)').click(function () {
  $('.select-type div:nth-of-type(2) .dot').addClass('active')
  $('.select-selected').text("BRAZYLIJSKIE JIU-JITSU")
  $('.table-schedule tr:not(:nth-of-type(10)) td').addClass('active');
  $('.table-schedule td.divided div.bjj').addClass('active');
  $('.table-schedule td div#bjj-nogi-intermediate').addClass('active');
  $('.table-schedule tr td div#bjj-kids-young').addClass('active');
  $('.table-schedule tr td div#bjj-intro').addClass('active');


})
$('.select-type div:nth-of-type(3)').click(function () {
  $('.select-type div:nth-of-type(3) .dot').addClass('active')
  $('.select-selected').text("BJJ wszyscy")
  $('.table-schedule tr td#bjj-all').addClass('active');
  $('.table-schedule tr td#bjj-nogi-all').addClass('active');
  $('.table-schedule tr td.divided').addClass('active');
  $('.table-schedule tr td div.bjj-nogi-all').addClass('active');
})
$('.select-type div:nth-of-type(4)').click(function () {
  $('.select-type div:nth-of-type(4) .dot').addClass('active')
  $('.select-selected').text("BJJ początkujący")
  $('.table-schedule tr td#bjj-beginners').addClass('active');
  $('.table-schedule tr td.divided').addClass('active');
  $('.table-schedule tr td div#bjj-nogi-beginners').addClass('active');


})
$('.select-type div:nth-of-type(5)').click(function () {
  $('.select-type div:nth-of-type(5) .dot').addClass('active')
  $('.select-selected').text("BJJ średnio-zaawansowani")
  $('.table-schedule tr td.divided').addClass('active');
  $('.table-schedule tr td div#bjj-intermediate').addClass('active');

})
$('.select-type div:nth-of-type(6)').click(function () {
  $('.select-type div:nth-of-type(6) .dot').addClass('active')
  $('.select-selected').text("BJJ NO-GI")
  $('.table-schedule tr td.divided').addClass('active');
  $('.table-schedule tr td div#bjj-nogi-beginners').addClass('active');
  $('.table-schedule tr td div.bjj-nogi-all').addClass('active');
  $('.table-schedule tr td#bjj-nogi-all').addClass('active');
  $('.table-schedule tr td#bjj-nogi-intermediate').addClass('active');


})
$('.select-type div:nth-of-type(7)').click(function () {
  $('.select-type div:nth-of-type(7) .dot').addClass('active')
  $('.select-selected').text("BJJ zaawansowani")
  $('.table-schedule tr td.divided').addClass('active');
  $('.table-schedule tr td div#bjj-advanced').addClass('active');
})
$('.select-type div:nth-of-type(8)').click(function () {
  $('.select-type div:nth-of-type(8) .dot').addClass('active')
  $('.select-selected').text("BJJ sparingi GI & NO-GI")
  $('.table-schedule tr td.divided').addClass('active');

  $('.table-schedule tr td#bjj-sparring').addClass('active');
})
$('.select-type div:nth-of-type(9)').click(function () {
  $('.select-type div:nth-of-type(9) .dot').addClass('active')
  $('.select-selected').text("BJJ kids")
  $('.table-schedule tr td#bjj-kids-young, .table-schedule tr td#bjj-kids-old').addClass('active');
  $('.table-schedule tr td.divided').addClass('active');
  $('.table-schedule tr td div#bjj-kids-old').addClass('active');
  $('.table-schedule tr td div#bjj-kids-advanced').addClass('active');
  $('.table-schedule tr td div#bjj-kids-young').addClass('active');


})
$('.select-type div:nth-of-type(10)').click(function () {
  $('.select-type div:nth-of-type(10) .dot').addClass('active')
  $('.select-selected').text("Zapasy")
  $('.table-schedule tr td.divided').addClass('active');
  $('.table-schedule tr td div#wrestling').addClass('active');
})
$('.select-type div:nth-of-type(11)').click(function () {
  $('.select-type div:nth-of-type(11) .dot').addClass('active')
  $('.select-selected').text("KICKBOXING")
  $('.table-schedule tr td.divided').addClass('active');
  $('.table-schedule tr td div#kick-all').addClass('active');
  $('.table-schedule tr td div#kick-kids').addClass('active');
  $('.table-schedule tr td#kick-beginners').addClass('active');
  $('.table-schedule tr td#kick-intermediate').addClass('active');
  $('.table-schedule tr td#kick-sparring').addClass('active');


})
$('.select-type div:nth-of-type(12)').click(function () {
  $('.select-type div:nth-of-type(12) .dot').addClass('active')
  $('.select-selected').text("Kickboxing wszyscy")
  $('.table-schedule tr td#kick-all').addClass('active');
  $('.table-schedule tr td.divided').addClass('active');
  $('.table-schedule tr td div#kick-all').addClass('active');
})
$('.select-type div:nth-of-type(13)').click(function () {
  $('.select-type div:nth-of-type(12) .dot').addClass('active')
  $('.select-selected').text("Kickboxing początkujący")
  $('.table-schedule tr td#kick-beginners').addClass('active');
  $('.table-schedule tr td.divided').addClass('active');
  

})
$('.select-type div:nth-of-type(14)').click(function () {
  $('.select-type div:nth-of-type(13) .dot').addClass('active')
  $('.select-selected').text("Kickboxing średnio-zaawansowani")
  $('.table-schedule tr td.divided').addClass('active');

  $('.table-schedule tr td#kick-intermediate').addClass('active');
})
$('.select-type div:nth-of-type(15)').click(function () {
  $('.select-type div:nth-of-type(14) .dot').addClass('active')
  $('.select-selected').text("Kickboxing kids")
  $('.table-schedule tr td.divided').addClass('active');
  $('.table-schedule tr td div#kick-kids').addClass('active');

})
$('.select-type div:nth-of-type(16)').click(function () {
  $('.select-type div:nth-of-type(15) .dot').addClass('active')
  $('.select-selected').text("Kickboxing sparingi")
  $('.table-schedule tr td#kick-sparring').addClass('active');
  $('.table-schedule tr td.divided').addClass('active');

})


$('.select-selected, .select img').click(function () {
  $('.select, .select-fade').toggleClass('active');
})
$('.select-type').click(function () {
  $('.select, .select-fade').removeClass('active');
})


$(document).click(function (e) {
  if (!$('.select').is(e.target) && $('.select').has(e.target).length === 0) { // if div is not target nor its descendant
    $('.select, .select-fade ').removeClass('active');
  }
});