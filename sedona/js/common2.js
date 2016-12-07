(function () {

    var chooseHotel = document.getElementById('choose-hotel');
    var hotelFiltrs = document.getElementById('hotels-filters');
    var overlayBlock = document.getElementsByClassName('popup-window__overlay');
    var formBlock = document.getElementsByClassName('popup-window__booking-form-wrap');


    function incCounter(counter) {
        var input = counter.querySelector('input');
        input.value++;

    }

    function decCounter(counter) {
        var input = counter.querySelector('input');
        if(+input.value <= 0) return;
        input.value--;
    }


    // обработка событий для блока choose-hotel

    if(chooseHotel){
        chooseHotel.addEventListener('click', function(event){
            var target = event.target;
    // "show/hide form"  button click event
            if (target.classList.contains('btn-toggle')) {
                event.preventDefault();

                popup = chooseHotel.querySelector('.popup-window__booking-form-wrap');
                popup.classList.toggle('popup-hide');
                popup.classList.toggle('popup-show');

                overlay= document.querySelector('.popup-window__overlay');
                overlay.classList.toggle('overlay-hide');
                overlay.classList.toggle('overlay-show');


                if(popup.classList.contains('.popup-show')) {
                    popup.querySelector('input').focus();
                }
            }


    //[+]/[-] buttons click event

            if (target.classList.contains('icon-minus')) {

                decCounter(target.parentNode);

            }

            if (target.classList.contains('icon-plus')) {

                incCounter(target.parentNode);
            }


            if (target.classList.contains('popup-window__find-btn')){
                event.preventDefault();
            }
        });


    // [ESC] button click event
        window.addEventListener('keydown', function(event){


            if (event.keyCode === 27) {
                popup = chooseHotel.querySelector('.popup-window__booking-form-wrap');

                if (popup.classList.contains('popup-show')) {
                    popup.classList.remove('popup-show');
                    popup.classList.add('popup-hide');

                    overlay.classList.toggle('overlay-hide');
                    overlay.classList.toggle('overlay-show');
                }
                return;
            }

        });


        // обработка события отправки формы
        chooseHotel.querySelector('form').addEventListener('submit', function(event) {
            var target = event.target;

            var formInputs = chooseHotel.querySelectorAll('.form-input');

            for(var i = 0, len= formInputs.length; i < len; i++) {
                if(isValid(formInputs[i])) continue;

                event.preventDefault();

                formInputs[i].focus();
                formInputs[i].classList.add('form-input-error');
                formInputs[i].oninput = clearErrorState;

                alert('поле заполнено неверно');
                return;
            }
        });

    }

    // out of popup-window click event

    if(overlayBlock){
        window.addEventListener('click', function(event) {
            var target = event.target;

            if (target.classList.contains('popup-window__overlay')) {

                target.classList.toggle('overlay-show');
                target.classList.toggle('overlay-hide');

                popup.classList.remove('popup-show');
                popup.classList.add('popup-hide');
            }
        });
    }

   $('.range-control').noUiSlider({
        start: [ 0, 3000 ],
        orientation: "horizontal",
        connect: true,
        step: 1,
        range: {
            'min': 0,
            'max': 5000,
        },
        format: wNumb({
            decimals: 0
        })
    });

    $(".range-control").Link('lower').to($('#price-from'));
    $(".range-control").Link('upper').to($('#price-to'));


// result are filtered by building-type

   $("input").click(function(){

       if ($('#hotel').is(':checked')){
           $(".hotels-item").show(300);
           console.log("hotel is checked");

       } else {
           $(".hotels-item").hide(300);
           console.log("is NOT checked")
       }

       if ($('#motel').is(':checked')){
           $(".motels-item").show(300);
           console.log("hotel is checked");

       } else {
           $(".motels-item").hide(300);
           console.log("is NOT checked")
       }

       if ($('#apartments').is(':checked')){
           $(".apartments-item").show(300);
           console.log("hotel is checked");

       } else {
           $(".apartments-item").hide(300);
           console.log("is NOT checked")
       }

   });


}) ();





