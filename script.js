const buttons = document.querySelector("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventLister("click", ()=>{
        const offset = button.dataset.carsouelButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel").querySelector('[data-slides]')
        const activeSlides = document.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlides) + offset;
        if (newIndex < 0) {
            newIndex = slides.children.length - 1
        }
        if(newIndex>=slides.children.length){
            newIndex = 0;
        }
        slides.children[newIndex].dataset.active = true;
        delete activeSlides.dataset.active
    })
});