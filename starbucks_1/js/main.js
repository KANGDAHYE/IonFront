const searchE1 = document.querySelector('.search');
const searchInputE1 = document.querySelector('input');

searchE1.addEventListener('click', function(){
    searchInputE1.focus();
})
//addEventListener : HTML에 없던 focus 클래스를 만들어줌. 
searchInputE1.addEventListener('focus',function(){
    searchE1.classList.add('focused');
    searchInputE1.seaAttribute('placeholder', '통합검색');
})
searchInputE1.addEventListener('blur',function(){
    searchE1.classList.reomve('focused');
    searchInputE1.seaAttribute('placeholder', '');
})