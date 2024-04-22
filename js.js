window.addEventListener('keydown', function(event) {
    var key = event.key.toUpperCase();
    var keyElements = document.querySelectorAll('.keyboard-key');
    keyElements.forEach(function(keyElement) {
        if (keyElement.textContent === key) {
            keyElement.classList.add('color_key');
        }
    });
});

window.addEventListener('keyup', function(event) {
    var key = event.key.toUpperCase();
    var keyElements = document.querySelectorAll('.keyboard-key');
    keyElements.forEach(function(keyElement) {
        if (keyElement.textContent === key) {
            keyElement.classList.remove('color_key');
        }
    });
});

window.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        var spaceElement = document.querySelector('.keyboard-tab');
        spaceElement.classList.add('color_key');
    }
});

window.addEventListener('keyup', function(event) {
    if (event.code === 'Space') {
        var spaceElement = document.querySelector('.keyboard-tab');
        spaceElement.classList.remove('color_key');
    }
});

