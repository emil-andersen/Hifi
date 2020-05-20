document.addEventListener('DOMContentLoaded', function(){

    var openForm = document.querySelector('.iconBar__btn');
    var closeForm = document.querySelector('.fa-times-circle');
    var subscribe = document.querySelector('.subscribe');

    openForm.addEventListener('click', function(){
        subscribe.classList.remove('subscribe_hidden');
        setTimeout(function(){
            subscribe.classList.remove('subscribe_visuallyHidden');
        }, 20);
    });
    closeForm.addEventListener('click', function(){
        subscribe.classList.add('subscribe_visuallyHidden');
        setTimeout(function(){
            subscribe.classList.add('subscribe_hidden');
        }, 600);
    });

});