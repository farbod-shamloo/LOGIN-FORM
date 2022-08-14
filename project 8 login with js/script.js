let visibleimg = document.querySelector('.visible');
let passinp = document.querySelector('.pass');


visibleimg.addEventListener('click' , function(){
    let passinptype = passinp.getAttribute('type');
    if(passinptype == 'password'){
        passinp.setAttribute('type' , 'text');
        visibleimg.setAttribute('src' ,'images/invisible-eye.png');
    }else{
        passinp.setAttribute('type' , 'password');
        visibleimg.setAttribute('src' ,'images/visible-eye.png');

    }
});