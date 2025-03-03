let lines = document.getElementsByClassName('lines')[0];
lines.addEventListener('click', function(){
    document.getElementById('menu').classList.toggle('show-menu');
    document.getElementById('l1').classList.toggle('line_1')
    document.getElementById('l2').classList.toggle('line_2')
})
