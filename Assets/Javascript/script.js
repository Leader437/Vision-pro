/* Boxicons */
// import 'boxicons';
// import 'boxicons/css/boxicons.min.css';

/* Scss File */
import '../Scss/main.scss';

/* Gsap import */
import gsap from "gsap";

/* ScrollTrigger import */
import ScrollTrigger from 'gsap/ScrollTrigger';

/* Register ScrollTrigger as Gsap Plugin */
gsap.registerPlugin(ScrollTrigger);

/* Locomotive Import */
import 'locomotive-scroll/dist/locomotive-scroll.css';
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    // Configuration options
});

/* Making Locomotive + ScrollTrigger work */
let loco = () => {
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true }) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.defaults({ scroller: "main" });
    // --- SETUP END ---

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
loco();



let arrow = document.querySelector('.arrow');

arrow.addEventListener('click', () => {
    arrow.classList.toggle('active');
});