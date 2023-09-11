import './style.css'

let typeSplit;

// Split the text up
function runSplit() {
    typeSplit = new SplitType(".hero-heading, [text-split], [heading-split], [mob-heading]", {
        types: "lines words"
    })
    createAnimation()
}
runSplit()

// Update on window resize
let windowWidth = window.innerWidth
window.addEventListener("resize", function () {
    if (windowWidth !== window.innerWidth) {
        windowWidth = window.innerWidth
        typeSplit.revert()
        runSplit()
        // ScrollTrigger.refresh(true)
    }
})


// On Page Load
function createAnimation() {
    let intro = gsap.timeline({
        pause: true
    });

    const lines = document.querySelectorAll('.line')
    lines.forEach((line, i) => {
        let words = line.querySelectorAll('.word')
        intro.from(
            words,
            {
                y: "101%",
                stagger: { each: 0.12 },
                ease: "power3.out",
                duration: 0.8
            },
            1 + i / 5
        )
    })
}