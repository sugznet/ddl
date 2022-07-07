// ninja(2);
// ninja("2");
// ninja([2]);
// ninja(34)
function ninja(target) {
    if(typeof target == 'number') {
        alert('整数です');
    }
}