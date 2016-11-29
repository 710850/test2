$(document).ready(function() {


    $(".slick-slider1").slick();
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });


    $(document).ready(function(){

        $("#promo-slider").carousel({
            interval: 2000
        });

        $("#promo-slider").on('slide.bs.carousel', function (e) {
            var lnk = $(".item.active").find('img').attr('data-lnk');
            $(".lnk-fancy").attr("href", lnk);
        });


    });

    $('.fancybox').fancybox();

    $(".table-btn"). click(function(){
        $(".table-btn").toggleClass("rotate180");
        $(".table-responsive").toggleClass("height100");
        $(".table-gradient").toggleClass("displaynone");

     /*   $(".table-responsive").animate({height:'800px'});*/
    });






});