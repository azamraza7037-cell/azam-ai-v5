console.log("AZAM AI v6 Loaded");
/*=========================
COUNTER ANIMATION
=========================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;

        let current = 0;

        const increment = target / 100;

        const updateCounter = ()=>{

            current += increment;

            if(current < target){

                counter.innerText = Math.ceil(current);

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText = target + "+";

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

},{
    threshold:.5
});

counters.forEach(counter=>counterObserver.observe(counter));
/*=========================
FAQ ACCORDION
=========================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if(faq !== item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});
/*=========================
BACK TO TOP
=========================*/

const backTop = document.querySelector(".back-top");

if(backTop){

backTop.addEventListener("click",e=>{

e.preventDefault();

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}
/*=========================
LENIS SMOOTH SCROLL
=========================*/

const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
    infinite: false
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
/*=========================
GSAP SCROLL REVEAL
=========================*/

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".reveal").forEach((el)=>{

gsap.to(el,{

y:0,

opacity:1,

duration:1,

ease:"power3.out",

scrollTrigger:{

trigger:el,

start:"top 85%",

toggleActions:"play none none none"

}

});

});

gsap.utils.toArray(".reveal-left").forEach((el)=>{

gsap.to(el,{

x:0,

opacity:1,

duration:1,

ease:"power3.out",

scrollTrigger:{

trigger:el,

start:"top 85%"

}

});

});

gsap.utils.toArray(".reveal-right").forEach((el)=>{

gsap.to(el,{

x:0,

opacity:1,

duration:1,

ease:"power3.out",

scrollTrigger:{

trigger:el,

start:"top 85%"

}

});

});

gsap.utils.toArray(".scale-up").forEach((el)=>{

gsap.to(el,{

scale:1,

opacity:1,

duration:1,

ease:"back.out(1.7)",

scrollTrigger:{

trigger:el,

start:"top 85%"

}

});

});
