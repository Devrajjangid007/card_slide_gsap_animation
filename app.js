gsap.to('.card1',{
    scale:0.7,
    opacity:0,
    scrollTrigger:{
        // markers:true,
        trigger:'.card1',
        start: 'top 15%',
        end:'bottom 15%',
        scrub:true
    }
})
gsap.to('.card2',{
    scale:0.7,
    opacity:0,
    scrollTrigger:{
        // markers:true,
        trigger:'.card2',
        start: 'top 15%',
        end:'bottom 15%',
        scrub:true
    }
})
// gsap.to('.card3',{
//     scale:0.7,
//     opacity:0,
//     scrollTrigger:{
//         // markers:true,
//         trigger:'.card3',
//         start: 'top 15%',
//         end:'bottom 15%',
//         scrub:true
//     }
// })