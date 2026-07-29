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
