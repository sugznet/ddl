var colorpicker = document.getElementById('color-change');
colorpicker.addEventListener('input', function() {
    var text = document.getElementsByClassName('title');
    text[0].style.color = colorpicker.value;
});

