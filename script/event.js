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

addLoadEvent(function () {
    var sectionClassName = undefined;

    var open = function (event) {
        const currTarget = event.currentTarget;
        const label = currTarget.getAttribute('data-label');
        const currState = state[label];
        const newState = !state[label];

        currTarget.setAttribute('data-open', newState);
        currTarget.querySelector('i').innerHTML = newState ? '&#9650;' : '&#9660;';
        state[label] = newState;
    };

    document.querySelectorAll('.event-info-section')
        .forEach(function(node) {
            console.log('added listener for ', node);
            node.setAttribute('data-open', false);
            node.addEventListener('click', open);

            const icon = document.createElement('i');
            icon.innerHTML = '&#9660;';
            node.querySelector('.event-info-section-content')
                .appendChild(icon);
        });
    console.log('loaded ');
});

var state = {};

// function open() {
//     console.log('navbar ');
//     // state.navbarOpen = !state.navbarOpen;
//     // var aside = document.getElementsByTagName('aside');
// }