window.onload = function() {
    var sectionClassName = undefined;

    console.log('onload');
    var open = function() {
        state.navbarOpen = !state.navbarOpen;
        sectionClassName = sectionClassName || document.querySelector('section').className;


        document.querySelector('section').className =
            state.navbarOpen ? sectionClassName + ' shifted' : sectionClassName;
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