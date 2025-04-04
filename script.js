
function displayMenu(){
    const toggle = document.querySelector(".dropdown-toggle");
    const menu = document.querySelector(".dropdown-menu");

    toggle.addEventListener("click", () => {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", (e) => {
        e.stopPropagation();
        if(!e.target.closest(".dropdown")) {
            menu.style.display = "none";
        }
    });
} 


function imageCarousel(){
    const track = document.querySelector(".carousel-track");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const dots = document.querySelectorAll(".dot");

    let currentIndex = 0;
    let interval;

    const updateSlide = (index) => {
        currentIndex = index;
        track.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
    };

    const updateDots = ()=>{
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    };

    const nextSlide = () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        updateSlide(nextIndex);
    };

    const prevSlide = () => {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide(prevIndex);
    };

    const resetInterval = () => {
        clearInterval(interval);
        interval = setInterval(nextSlide, 5000);
    };

    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetInterval();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetInterval();
    });

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            updateSlide(Number(dot.dataset.slide));
            resetInterval();
        })
    });

    interval = setInterval(nextSlide,5000);
}

displayMenu();
imageCarousel();
