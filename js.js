document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase();
    const keyboardKey = document.querySelector(`.keyboard-key:contains('${key}')`);
    
    if (keyboardKey) {
        keyboardKey.classList.add('active');
        setTimeout(function() {
            keyboardKey.classList.remove('active');
        }, 300);
    }
});