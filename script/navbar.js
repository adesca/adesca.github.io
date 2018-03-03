window.onload = function() {
    console.log('onload');
    var open = function() {
        alert('open');
    };

    document.getElementById('site-logo').addEventListener('click', open);
    console.log('loaded ', document.getElementById('site-logo'));
};

var state = {
    navbarOpen: false
};

// function open() {
//     console.log('navbar ');
//     // state.navbarOpen = !state.navbarOpen;
//     // var aside = document.getElementsByTagName('aside');
// }