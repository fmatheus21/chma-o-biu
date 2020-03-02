(function ($) {
    'use strict';

    $('.download-app-google').on('click', function() {
        $('#download-modal-google').modal('show');
    });

    $('.download-app-apple').on('click', function() {
        $('#download-modal-apple').modal('show');
    });

    $('#homo-driver-card').on('mouseenter', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/bg-img/DriverB.png');
    }).on('mouseleave', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/bg-img/Driver.png'); 
    });

    $('#homo-executive-card').on('mouseenter', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/bg-img/ExecutivoB.png');
    }).on('mouseleave', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/bg-img/Executivo.png');
    });

    $('#homo-lux-card').on('mouseenter', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/bg-img/LuxoB.png');
    }).on('mouseleave', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/bg-img/Luxo.png');
    });

    $('#homo-taxi-card').on('mouseenter', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/bg-img/TaxiB.png');
    }).on('mouseleave', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/bg-img/Taxi.png');
    });

    $('#homo-pet-card').on('mouseenter', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/bg-img/PetB.png');
    }).on('mouseleave', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/bg-img/Pet.png');
    });

    $('#homo-baby-card').on('mouseenter', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/bg-img/BabyB.png');
    }).on('mouseleave', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/bg-img/Baby.png');
    });

    $('.submit-btn').on('click', function(event) {
        event.preventDefault();

        var $btn = $(this);
        $btn.html('<i class="fa fa-circle-o-notch fa-spin"></i> Enviando');
        $btn.prop('disabled', true);

        var name = $(':input[name="name"]').val();
        var email = $(':input[name="email"]').val();
        var message = $(':input[name="message"]').val();

        if(name == undefined || name.trim() == '' || email == undefined || email.trim() == '' || message == undefined) {
            swal({
                title: 'Informações inválidas',
                text: 'Favor preencher corretamente os dados antes de enviar sua mensagem.',
                icon: 'info',
                value: true,
                visible: true,
                className: '',
                closeModal: true
            });

            $btn.html('Enviar');
            $btn.prop('disabled', false);
            return;
        }

        var json = {
            name: name,
            email: email,
            message: message
        };

        $.ajax({
            type: 'POST',
            url: '/send-email.php',
            data: json,
            complete: function(response) {
                switch(response.status) {
                    case 200:
                        swal({
                            title: 'Mensagem enviada',
                            text: 'Sua mensagem foi enviada com sucesso. Em breve lhe responderemos.',
                            icon: 'success',
                            value: true,
                            visible: true,
                            className: '',
                            closeModal: true
                        });
                        break;

                    case 422:
                        swal({
                            title: 'Informações inválidas',
                            text: 'Favor preencher corretamente os dados antes de enviar sua mensagem.',
                            icon: 'info',
                            value: true,
                            visible: true,
                            className: '',
                            closeModal: true
                        });
                        break;

                    default:
                        swal({
                            title: 'Mensagem não enviada',
                            text: 'Um erro ocorreu ao enviar sua mensagem. Tente novamente mais tarde.',
                            icon: 'error',
                            value: true,
                            visible: true,
                            className: '',
                            closeModal: true
                        });
                }

                $btn.html('Enviar');
                $btn.prop('disabled', false);

            }
        });

    });

    

})(jQuery);


