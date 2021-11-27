    const sliderContainer = document.querySelector('.slider-container');
    const slides = Array.from(document.querySelectorAll('.slide'));

    let isDragging = false;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let startPos = 0;
    let animationID = 0;
    let currentIndex = 0;
    
    slides.forEach((slide, index) => {
        slide.addEventListener('touchstart', touchStart(index), {passive: true});
        slide.addEventListener('touchend', touchEnd);
        slide.addEventListener('touchmove', touchMove, {passive: true});

        slide.addEventListener('dragging', (event)=> {
            event.preventDefault();
            event.stopPropagation();
        })
    })

    function touchStart(index) {
        return function(event) {
            isDragging = true;
            startPos = getPositionX(event);
            currentIndex = index;
            animationID = requestAnimationFrame(animation);
        }
    }

    function touchEnd() {
        isDragging = false;
        cancelAnimationFrame(animationID);
        const moveBy = currentTranslate - prevTranslate;
        
        if (moveBy < 100 && currentIndex < slides.length - 1) currentIndex += 1;
        if (moveBy > 100 && currentIndex > 0) currentIndex -= 1;

        setPositionByIndex();

    }

    function touchMove(event) {
        if (isDragging) {
            const currentPosition = getPositionX(event);
            currentTranslate = prevTranslate + currentPosition -
            startPos;
        }
    }

    function setSliderPosition() {
        sliderContainer.style.transform = `translateX(${currentTranslate}px)`;
    }

    function getPositionX(event) {
        return event.touches[0].clientX;
    }

    function animation() {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animation);
    }

    function setPositionByIndex() {
        currentTranslate = currentIndex * -window.innerWidth;
        prevTranslate = currentTranslate;

        setSliderPosition();
    }

