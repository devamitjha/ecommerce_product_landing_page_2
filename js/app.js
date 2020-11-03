const timeLine = gsap.timeline();

timeLine.from([".bannerAddtionalBg", ".home_"], {
    duration: 1.2,
    height: 0,
    ease: "power3.inOut",
    stagger: {
        amount: .3
    }
})

    .from("header", {
        delay: -0.2,
        y: 16,
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut"
    })

    .from([".content h1", ".cta"], {
        delay: -0.4,
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
            amount: .2
        }
    })

    .from(".main_ img", {
        delay: -0.4,
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })

    .from([".pagination_ span"], {
        delay: -0.4,
        x: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
            amount: .2
        }
    });

gsap.from([".slider_", ".small_product"], {
    delay: 2.4,
    x: -60,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: {
        amount: .3
    }
})

//please subscribe my channel
//thanks for watching