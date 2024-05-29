import '../scss/main.scss';
import $ from 'jquery';
import 'bootstrap';
import 'popper.js';

$(window).on('load', function () {
    let b = $('body');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        b.addClass('ios');
    } else {
        b.addClass('web');
    }
});

$(function () {
    // Password switch
    const passBtn = document.querySelector('.form-button-pass');
    if (passBtn) {
        let inputs = document.querySelectorAll('input[type="password"]');
        passBtn.addEventListener('click', function () {
            if (inputs[0].type === 'password') {
                inputs.forEach(function(input) {
                    input.type = 'text';
                });
                this.innerHTML = '<svg><use xlink:href="img/spritemap.svg#sprite-pass-hidden"></use></svg>';
            }
            else {
                inputs.forEach(function(input) {
                    input.type = 'password';
                });
                this.innerHTML = '<svg><use xlink:href="img/spritemap.svg#sprite-pass-visible"></use></svg>';
            }
        });
    }
});