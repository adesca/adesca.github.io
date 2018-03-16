

var state = {
    navbarOpen: false,
    xDown: undefined,
    yDown: undefined,
};



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


    document.getElementById('navbar-site-logo').addEventListener('click', open);
    document.getElementsByTagName('aside').item(0).addEventListener('touchstart', handleTouchStart, {passive: true});
    document.getElementsByTagName('aside').item(0).addEventListener('touchmove', handleTouchStart, {passive: true});
    console.log('loaded navbar script');

    function open() {
        state.navbarOpen = !state.navbarOpen;
        sectionClassName = sectionClassName || document.querySelector('section').className;


        document.querySelector('section').className =
            state.navbarOpen ? sectionClassName + ' shifted' : sectionClassName;
        document.querySelector('aside').className =
            state.navbarOpen ? 'expanded' : 'collapsed';
    };

    function handleTouchStart(evt) {
        state.xDown = evt.touches[0].clientX;
        state.yDown = evt.touches[0].clientY;
    };
});

// function open() {
//     console.log('navbar ');
//     // state.navbarOpen = !state.navbarOpen;
//     // var aside = document.getElementsByTagName('aside');
// }