let title = document.querySelector('.title');
let text = document.querySelector('.text');
let title2 = document.querySelector('.title2');
let title3 = document.querySelector('.title3');
let title4 = document.querySelector('.title4');
let active = document.querySelector('.active');
let active2 = document.querySelector('.active2');
let span = document.querySelectorAll('.span');
let span1 = document.querySelectorAll('.span1');
let ism = prompt('Ismingizni kiriting:');
let body = document.querySelector('.body')


while(!isNaN(ism)){
    ism = prompt('Iltimos faqat harf kiriting:');
}if(isNaN(ism)){
    for(let i = 0; i < span.length; i++){
        span[i].innerHTML = `"${ism}"`
    }
    for(let i = 0; i < span1.length; i++){
        span1[i].innerHTML = ism
    }
}

text.addEventListener('click', function (){
    if(title2.classList.contains('active')){
        title2.classList.remove('active')
        title3.classList.add('active')
    }else if(title3.classList.contains('active')){
        title3.classList.remove('active')
        title4.classList.add('active')
    }else if(title4.classList.contains('active')){
        title4.classList.remove('active')
        title2.classList.add('active')
    }

})