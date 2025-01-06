const _elements = {
    bar:  document.querySelector('.bar'),
    barScreen: document.querySelector('.bar-modal'),
    barLinks: document.querySelectorAll('.item'),
    btnWhats: document.querySelector('.btn-hidden'),
    unidades: document.querySelector('.unidades')
}

_elements.bar.addEventListener('click', () =>{
    _elements.barScreen.classList.toggle('bar-modal--active');
});

_elements.barLinks.forEach(item =>{
    item.addEventListener('click', () =>{
        let title = item.getAttribute('href');

        let element = document.querySelector(title);

        let position = element.offsetTop;

        window.scrollTo({
            top: position,
            behavior: "smooth"
        })
        _elements.bar.dispatchEvent(new Event("click"));
    });
});

window.onscroll = function(){
    scroll();
}
function scroll(){
    if(document.documentElement.scrollTop > 800){
        _elements.btnWhats.classList.add('btn-whats');
    }
}

