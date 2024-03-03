/* Boxicons */
import 'boxicons';
import 'boxicons/css/boxicons.min.css';

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

/* Making Locomotive + ScrollTrigger work */
let loco = () => {

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // changing colors of header based on height of window
    locoScroll.on("scroll", (e) => {
    header.classList.toggle('reverse', e.scroll.y > 1100);
    });

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
    // ScrollTrigger.defaults({ scroller: "main" });
    // --- SETUP END ---

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
loco();



let header = document.querySelector('header');
let nav = document.querySelector('nav');
let arrow = document.querySelector('.arrow');
let blurDiv = document.querySelector('.blurDiv');
let main = document.querySelector('main');

arrow.addEventListener('click', () => {
    nav.classList.toggle('active');
    header.classList.toggle('open');
    blurDiv.classList.toggle('blurActive');
});








gsap.to('.page-1>video', {
    scrollTrigger: {
        trigger: '.page-1',
        start: '2% top',
        end: 'bottom top',
        scroller: 'main'
    },
    onStart:()=> {
        document.querySelector('.home-vid').play();
    }
})

gsap.to(".page-1",{
    scrollTrigger:{
        trigger:'.page-1',
        start:'top top',
        end:'bottom top',
        scroller:'main',
        pin:true
    }
})

gsap.to(".home-hero",{
    scrollTrigger:{
        trigger: '.home-hero',
        start:'2% top',
        end:'10% bottom',
        scroller:'main',
        scrub:.5,
    },
    opacity:0
})


var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:'.page-2',
        start:'top top',
        scrub:true,
        scroller:'main',
        pin:true
    },
})
.to ('.page-2>.p-1', {
    top: '-30%'
})
.to ('.page-2>.p-2', {
    bottom: '130%'
})
.to ('.page-2>video', {
    filter: 'blur(4px) grayscale(60%)',
    width: '98%',
    left: '50%',
    translateX: '-50%'
})


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.page-3',
        start:'top top',
        scrub:1,
        scroller:'main',
        pin:true
    }
})
.to ('.page-3 > .p-1', {
    top: '-30%'
})
.to ('.page-3 > .p-2', {
    bottom: '130%'
})
.to ('.page-3>video', {
    filter: 'blur(4px) grayscale(60%)',
    width: '98%',
    left: '50%',
    translateX: '-50%'
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:'.page-4',
        start:'top top',
        scrub:1,
        scroller:'main',
        pin:true
    }
})
.to ('.page-4 > p', {
    top: '-30%'
})
.to ('.page-4>video', {
    filter: 'blur(4px) grayscale(60%)',
    width: '98%',
    left: '50%',
    translateX: '-50%'
})

var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:'.page-6',
        start:'top top',
        scrub:1,
        scroller:'main',
        pin:true
    }
})
.to ('.page-6 > p', {
    top: '-30%'
})
.to ('.page-6>video', {
    filter: 'blur(4px) grayscale(60%)',
    width: '98%',
    left: '50%',
    translateX: '-50%'
})