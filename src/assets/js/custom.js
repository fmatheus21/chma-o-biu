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
        img.attr('src', './assets/img/driver/driver-white.png');
    }).on('mouseleave', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/driver/driver.png'); 
    });

    $('#homo-executive-card').on('mouseenter', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/driver/executivo-white.png');
    }).on('mouseleave', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/driver/executivo.png');
    });

    $('#homo-lux-card').on('mouseenter', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/driver/luxo-white.png');
    }).on('mouseleave', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/driver/luxo.png');
    });

    $('#homo-taxi-card').on('mouseenter', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/driver/taxi-white.png');
    }).on('mouseleave', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/driver/taxi.png');
    });

    $('#homo-pet-card').on('mouseenter', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/driver/pet-white.png');
    }).on('mouseleave', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/driver/pet.png');
    });

    $('#homo-baby-card').on('mouseenter', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/driver/baby-white.png');
    }).on('mouseleave', function() {
        var img = $(this).children('div').children('img');
        img.attr('src', './assets/img/driver/baby.png');
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


