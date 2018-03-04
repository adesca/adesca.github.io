window.onload = function() {
    const navbar =

    console.log('onload');
    var open = function() {
        state.navbarOpen = !state.navbarOpen;
        document.querySelector('aside').className =
            state.navbarOpen ? 'expanded' : 'collapsed';
    };

    document.getElementById('navbar-site-logo').addEventListener('click', open);
    console.log('loaded ');
};

var state = {
    navbarOpen: false
};

// function open() {
//     console.log('navbar ');
//     // state.navbarOpen = !state.navbarOpen;
//     // var aside = document.getElementsByTagName('aside');
// }