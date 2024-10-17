$(document).ready(function() {
    // Hover effect to rotate the service cards 360 degrees
    $('.service-card').hover(function() {
        $(this).addClass('animate__animated animate__rotateIn');
    }, function() {
        $(this).removeClass('animate__animated animate__rotateIn');
    });
});
