// "Use strict"
window.addEventListener("scroll", function() {
    // console.log(document.getElementById("timeline"));
    
    const boxes = document.querySelectorAll('.box');
    
    // console.log(boxes);
    const TriggerBottom = (window.innerHeight / 5) * 4;


    boxes.forEach((box) => {
        const topBox = box.getBoundingClientRect().top;

        if (topBox < TriggerBottom) {
            // box.classList.classList.add("show");
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
});