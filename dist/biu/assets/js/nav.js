$('#navbarDropdown').mouseenter(function () {
    $('#navbarDropdown > .dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}).mouseleave(function () {
    $('#navbarDropdown > .dropdown-menu').stop(true, true).delay(200).fadeOut(500);
})

$('#navbarDropdownHelp').mouseenter(function () {
    $('#navbarDropdownHelp > .dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}).mouseleave(function () {
    $('#navbarDropdownHelp > .dropdown-menu').stop(true, true).delay(200).fadeOut(500);
})