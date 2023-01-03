$(".banner-slider").slick({
    arrows:false,
    fade:true,
    autoplay:true,

})


$(".popular-slider").slick({
    slidesToShow:2,
    prevArrow:'<button class= "prev"> <img src= "images/arrow.png"></button>',
    nextArrow:'<button class= "next"> <img src= "images/arrow.png"></button>',
})


new VenoBox({
    selector: '.my-video-links',
});

$(".gellary-slider").slick({
    slidesToShow:6,
    autoplay:true,
    arrows:false,
})

$(".testi-slider").slick({
    slidesToShow:2,
    arrows:false,
    autoplay:true,

})


$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 40,
      max: 519,
      step: 1,
      values: [ 3000, 6000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );


  $(".choto").click(function(e){
    console.log(e.target.src)

    $(".boro").attr("src",e.target.src)
  })


  var number = 0

  $(".minus").click(function(){
    if(number >0){
        number = number- 1
        $(".result").text(number)
    }

  })


  $(".plus").click(function(){
    number = number+ 1
    $(".result").text(number)
  })


  $(".product-slider").slick({
    slidesToShow:4,
    arrows:false,
    autoplay:true,
  })


  $(".adoption-slider").slick({
    slidesToShow:1,
    arrows:false,
    autoplay:true,
  })


  $(".animal-slider").slick({
    slidesToShow:4,
    arrows:false,
    autoplay:true,
  })

  $(".imgv-slider").slick({
    slidesToShow:1,
    arrows:false,
    vertical:true,
    dots:true,
    autoplay:true,
    autoPlaySpeed:1000,

  })


  
  AOS.init();





 
  