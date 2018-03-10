

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

    function handleTouchMove(evt) {
        const xDown = state.xDown;
        const yDown = state.yDown;

        if (!xDown || !yDown) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
            if (xDiff > 0) {
                open()
            } else {
                open()
            }
        } else {
            if (yDiff > 0) {
                /* up swipe */
            } else {
                /* down swipe */
            }
        }
    }
});

// function open() {
//     console.log('navbar ');
//     // state.navbarOpen = !state.navbarOpen;
//     // var aside = document.getElementsByTagName('aside');
// }