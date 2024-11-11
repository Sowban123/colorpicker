let color = document.getElementById("color");
let text = document.getElementById("text");
let para = document.getElementById("para");
let h1 = document.getElementById("h1");
let p = document.querySelector("p");
let  image = document.getElementById("image");
color.addEventListener("input", () => {
    let col = color.value;
    image.style.color = col;
    text.value=col;
    // h1.style.color=col;
});
let tl = gsap.timeline();


tl.to("h1", {
    duration: 3,
    delay: 1,
    x: 1000,
//  rotate:360,
    
  
});


tl.from("p", {
    duration: 2,
    y: 300,
    opacity:0
});

    