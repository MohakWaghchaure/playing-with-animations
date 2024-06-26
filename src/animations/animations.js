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
    console.log('document loaded..');

    // -------------Loading Text----------------------
    const letters = document.querySelectorAll('.loading-text .letter');
    // console.log("letters", letters);
    let t7 = gsap.timeline();

    for(let j=0; j<letters.length; j++){
      t7.to(letters[j], { x: 0, y:0, duration: 0.2, ease: "bounce" });
    }
    t7.to(".preLoader-section", { yPercent: -100, ease: "power1.out", duration: 0.5, delay: 0.5});
    t7.to(".preLoader-section", { display: 'none' });

    // -----------Typing Effect-------------------------
    let tl = gsap.timeline({repeat: 5, repeatDelay: 2}); 
    tl.to(".intro-text", {text: { value: newText[0],}, ease: "none", duration: 4, delay: 2});
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
    t4.fadeIn(".backgroundCircle.odd", { duration: 40 });
    t4.fadeOut(".backgroundCircle.odd", { duration: 40 });

    let t5 = gsap.timeline({repeat: 100});
    t5.scaleIn(".backgroundCircle.odd", { duration: 40 });
    t5.scaleOut(".backgroundCircle.odd", { duration: 40 });

    
    // ----------- Mouse Effect-------------------

    const overlay = document.querySelector('.mouseEffect-overlay');

    window.addEventListener('mousemove', (e)=>{
      const {clientX, clientY} = e;
      const xPosition = Math.round((clientX/window.innerWidth)*100);
      const yPosition = Math.round((clientY/window.innerHeight)*100);
      gsap.to(overlay, {'--x': `${xPosition}%`, '--y': `${yPosition}%`, duration: 1, ease: 'sine.out'});
    })
    

    // -----------Draggable cubes-------------------------
    Draggable.create(".cube", { bounds: ".cube-wrapper", inertia: true });

    // -----------Draggable chess pieces-------------------------
    Draggable.create(".piece", { bounds: ".chessboard-conatiner", inertia: true });

    // -------------tripping cubes------------------------
    const cubes = document.querySelectorAll('.trip-square');
    
    gsap.to(cubes[0], {rotate: '360deg', repeat: 100, duration: 40});
    gsap.to(cubes[1], {rotate: '360deg', repeat: 100, duration: 40});
    gsap.to(cubes[2], {rotate: '360deg', repeat: 100, duration: 40});
    gsap.to(cubes[3], {rotate: '360deg', repeat: 100, duration: 40});
    gsap.to(cubes[4], {rotate: '360deg', repeat: 100, duration: 40});
    gsap.to(cubes[5], {rotate: '360deg', repeat: 100, duration: 40});
    gsap.to(cubes[6], {rotate: '360deg', repeat: 100, duration: 40});
    gsap.to(cubes[7], {rotate: '360deg', repeat: 100, duration: 40});
    gsap.to(cubes[8], {rotate: '360deg', repeat: 100, duration: 40});
    gsap.to(cubes[9], {rotate: '360deg', repeat: 100, duration: 40});

    const circles_1 = document.querySelectorAll('.trip-circle');
    console.log('cubes', circles_1);
    gsap.to(circles_1[0], {rotate: '360deg', repeat: 100, duration: 40});
    gsap.to(circles_1[1], {rotate: '360deg', repeat: 100, duration: 40});
    gsap.to(circles_1[2], {rotate: '360deg', repeat: 100, duration: 40});
    gsap.to(circles_1[3], {rotate: '360deg', repeat: 100, duration: 40});
    gsap.to(circles_1[4], {rotate: '360deg', repeat: 100, duration: 40});
    gsap.to(circles_1[5], {rotate: '360deg', repeat: 100, duration: 40});
    gsap.to(circles_1[6], {rotate: '360deg', repeat: 100, duration: 40});
    gsap.to(circles_1[7], {rotate: '360deg', repeat: 100, duration: 40});
    gsap.to(circles_1[8], {rotate: '360deg', repeat: 100, duration: 40});
    gsap.to(circles_1[9], {rotate: '360deg', repeat: 100, duration: 40});
  
      
    //  -----------progressbar visibility control--------------------

    // let progressPoints = document.querySelectorAll(".progress-points .point");
    // let triggerPoints = document.querySelectorAll(".scroll-section .trigger");

    // console.log('triggerPoints', triggerPoints);
    // console.log('progressPoints', progressPoints);

    // gsap.to(".Progressbar-section", { scrollTrigger: ".scroll-section", opacity: 1,});

    // for(let i=0; i< progressPoints.length; i++){
    //   gsap.to( progressPoints[i], {
    //     scrollTrigger: { trigger: triggerPoints[i+1], start: "top top", end:"top 100px", scrub: true,},
    //     background: "#ffffff", boxShadow: "inset 0 0 20px #ffffff", opacity: 1,
    //   });
    // }


    // --------------- Bouncing ball------------
    const circle1 = gsap.timeline({
      scrollTrigger: {
        scrub: 4,
        trigger: ".rotating-circle",
        start: "top 80%",
        end: "bottom 0%",
        // markers: "true",
        toggleActions: "restart none reverse none",
      },
    });
    
    circle1.to(".rotating-circle", {rotateZ: 90, y: 400, duration: 10});
    circle1.to(".rotating-circle", {rotateZ: 180, y: -100, duration: 10});
    circle1.to(".rotating-circle", {rotateZ: 270, y: 400, duration: 10});
    circle1.to(".rotating-circle", {rotateZ: 360, y: -100, duration: 10});
    circle1.to(".rotating-circle", {scale: 10,duration: 10})
    circle1.to(".rotating-circle", {scale: 20, duration: 10})
    circle1.to(".rotating-circle", {opacity: 0, duration: 10})

    
    // -----------Rotating squares-----------
    const shapes1 = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: ".rotating-shape",
        start: "top 80%",
        end: "bottom 0%",
        // markers: "true",
        toggleActions: "restart none reverse none",
        // endTrigger: ".scrollEffect-conatiner",
      },
    });

    shapes1.to(".rotating-shape", {rotateZ: 200, duration: 50,});
    shapes1.to(".rotating-shape", {opacity: 1, duration: 50,});
    shapes1.to(".rotating-shape", {opacity: 0, duration: 50, display: 'none'});

    
    // -----------Bubbles-----------
    let bubble = document.querySelectorAll(".flooting-bubbles-wrapper .bubble");
    // console.log('bubble', bubble);

    for(let i=0; i<bubble.length; i++){
      const tBubbles = gsap.timeline({
        scrollTrigger: {
          scrub: 10,
          trigger: bubble[i],
          start: "top 80%",
          end: "bottom 0%",
          // markers: "true",
          toggleActions: "restart none reverse none",
          endTrigger: ".scrollEffect-conatiner",
          pin: true,
        },
      });
      tBubbles.to( bubble[i], {duration: 20});
      tBubbles.to( bubble[i], {yPercent: -200, duration: 100,});
      tBubbles.to( bubble[i], {opacity: 0, duration: 100});
    }
  
   



    // const hSlider = document.querySelector(".horizonal-slider-container");
    // let sliderWidth = hSlider.offsetWidth;
    // let amountToScroll = sliderWidth - window.innerWidth;
    // console.log("sliderWidth", sliderWidth, amountToScroll);

    // const hScreens = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: hSlider,
    //     pin: true,
    //     scrub: 4,
    //     end: () => "+=" + hSlider.offsetWidth,
    //   },
    // });

    // hScreens.to(hSlider, {xPercent: -66,});
    


    
    
    
    


};




  
 
  
  
  
  


   