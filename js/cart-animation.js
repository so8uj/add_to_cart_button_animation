var button = document.querySelector('.cart-btn');

button.addEventListener('click',function(e){



    if(!button.classList.contains('adding_to_cart')) {
        button.classList.add('adding_to_cart');
        setTimeout(() => button.classList.remove('adding_to_cart'), 3500);
    }
    e.preventDefault();

    

});