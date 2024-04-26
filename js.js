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

const hed = document.querySelector('header')
const main = document.querySelector('main')
const key = document.getElementsByClassName('keyboard-key')
const tab = document.getElementsByClassName('keyboard-tab')
const btn = document.getElementById('ik')
const body = document.body
btn.addEventListener('click',() =>{
    hed.classList.toggle('header_1')
    main.classList.toggle('main_1')
    btn.classList.toggle('ik_1')
    body.classList.toggle('body_1')
    key.classList.toggle('keyboardkey_1')
    tab.classList.toggle('keyboardtab_1')
})
