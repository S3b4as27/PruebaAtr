const nobtn = document.querySelector('#nobtn');

nobtn.addEventListener('click',function () {
    alert('sabia que ibas a pensar que ibas a probar con 10 uwu')
});

const yesbtn = document.querySelector ('#yesbtn');

yesbtn.addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    yesbtn.style.setProperty('top', randomY+'%');
    yesbtn.style.setProperty('left', randomX+'%');
    yesbtn.style.setProperty('transform',`translate(-${randomX}% , -${randomY}%`);
})