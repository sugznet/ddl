var btn = document.getElementsByClassName('clone');
btn[0].addEventListener('click', function(e){
    console.log(e.target);
    var li = document.querySelector('li:last-child');
    var clone_li = li.cloneNode(true);
    var ul = document.getElementsByTagName('ul');

    ul[0].appendChild(clone_li);

    // console.log( li.cloneNode().outerHTML );
    // console.log(li);
    // li.cloneNode(true);
});