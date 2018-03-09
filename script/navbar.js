function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

addLoadEvent(function() {
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
    console.log('loaded navbar script');
});

var state = {
    navbarOpen: false
};

// function open() {
//     console.log('navbar ');
//     // state.navbarOpen = !state.navbarOpen;
//     // var aside = document.getElementsByTagName('aside');
// }