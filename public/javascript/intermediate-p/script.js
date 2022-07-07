var my_array = [2,19,59,203,5,300];
var max = my_array.reduce(function(prev, current){
    return Math.max(prev, current);
});
alert(max);

