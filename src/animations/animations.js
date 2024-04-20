import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import TextPlugin from 'gsap/TextPlugin';
import Draggable from "gsap/Draggable";
import MotionPathPlugin from "gsap/MotionPathPlugin";

gsap.registerPlugin(TextPlugin, ScrollTrigger, Draggable, Flip, MotionPathPlugin);

// ------------------hero page background animations----------------------
gsap.registerEffect({
    name: "fadeOut",
    effect: (targets, config) => {
      return gsap.fromTo(targets, { duration: config.duration, opacity: 0.2 }, { duration: config.duration, opacity: 0.5 });
    },
    defaults: { duration: 10 }, 
    extendTimeline: true, 
});
gsap.registerEffect({
    name: "fadeIn",
    effect: (targets, config) => {
      return gsap.fromTo(targets, { duration: config.duration, opacity: 0.5 }, { duration: config.duration, opacity: 0.2 });
    },
    // defaults: { duration: 10 }, 
    extendTimeline: true, 
});
gsap.registerEffect({
    name: "scaleOut",
    effect: (targets, config) => {
      return gsap.fromTo(targets, { duration: config.duration, scale: 1, ease: "linear" }, { duration: config.duration, scale: 2 });
    },
    // defaults: { duration: 10 }, 
    extendTimeline: true, 
});
gsap.registerEffect({
    name: "scaleIn",
    effect: (targets, config) => {
      return gsap.fromTo(targets, { duration: config.duration, scale: 2, ease: "linear" }, { duration: config.duration, scale: 1 });
    },
    // defaults: { duration: 10 }, 
    extendTimeline: true, 
});


// ------------------Intro text-------------------------
let newText = [
    'Why animations and interactivity are important in the website?', 
    'Animation and interactivity capture attention and encourage exploration.', 
    'They improve navigation, provide feedback, and make interactions intuitive.', 
    'Animation conveys complex ideas and emotions effectively, enhancing communication.',
    'They reinforce brand personality and create a cohesive experience.',
    'Animations make websites visually interesting and aesthetically pleasing.',
    'Interactive elements improve site functionality and user control.',
    'These elements collectively contribute to a more compelling and effective website experience.'
]

window.onload = function () {
    console.log('document loaded');

    // -----------Typing Effect-------------------------
    let tl = gsap.timeline({repeat: 5, repeatDelay: 2}); 
    tl.to(".intro-text", {text: { value: newText[0],}, ease: "none", duration: 4 });
    tl.to(".intro-text", {text: { value: newText[1],}, ease: "none", duration: 4, delay: 1});
    tl.to(".intro-text", {text: { value: newText[3],}, ease: "none", duration: 4, delay: 1});
    tl.to(".intro-text", {text: { value: newText[4],}, ease: "none", duration: 4, delay: 1});
    tl.to(".intro-text", {text: { value: newText[5],}, ease: "none", duration: 4, delay: 1});
    tl.to(".intro-text", {text: { value: newText[6],}, ease: "none", duration: 4, delay: 1});
    tl.to(".intro-text", {text: { value: newText[7],}, ease: "none", duration: 4, delay: 1});

    // ------------Background Objects------------------
    let t2 = gsap.timeline({repeat: 100});
    t2.fadeOut(".backgroundCircle.even", { duration: 40 })
    t2.fadeIn(".backgroundCircle.even", { duration: 40 })

    let t3 = gsap.timeline({repeat: 100});
    t3.scaleOut(".backgroundCircle.even", { duration: 40 });
    t3.scaleIn(".backgroundCircle.even", { duration: 40 });

    let t4 = gsap.timeline({repeat: 100});
    t4.fadeIn(".backgroundCircle.odd", { duration: 40 })
    t4.fadeOut(".backgroundCircle.odd", { duration: 40 })

    let t5 = gsap.timeline({repeat: 100});
    t5.scaleIn(".backgroundCircle.odd", { duration: 40 });
    t5.scaleOut(".backgroundCircle.odd", { duration: 40 });

    
    // -----------Draggable cubes-------------------------
    Draggable.create(".cube", { bounds: ".cube-wrapper", inertia: true });

    // -----------Draggable chess pieces-------------------------
    Draggable.create(".piece", { bounds: ".chessboard-conatiner", inertia: true });
      
    //  -----------progressbar visibility control--------------------

    let progressPoints = document.querySelectorAll(".progress-points .point");
    let triggerPoints = document.querySelectorAll(".test-section .trigger");

    gsap.to(".Progressbar-section", { scrollTrigger: ".test-section", opacity: 1,});

    for(let i=0; i< progressPoints.length; i++){
      gsap.to( progressPoints[i], {
        scrollTrigger: { trigger: triggerPoints[i], start: "top top", end:"top 100px", scrub: true,},
        background: "#ffffff", boxShadow: "inset 0 0 20px #ffffff", opacity: 1,
      });
    }
};




  
 
  
  
  
  


   