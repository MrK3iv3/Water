(function(){
    let lists = document.querySelectorAll(".ripple-effect")
    let targetsToHidden = document.querySelectorAll("[water-hidden-target]")
    let targetsToDelete = document.querySelectorAll("[water-delete-target]")
    let tooltips = document.querySelectorAll(".tooltip")
    lists.forEach((item) =>{
        item.addEventListener("click", function(e){
            let circle = document.createElement("div")
            this.appendChild(circle)
            circle.classList.add("ripple-effect-item")
            circle.style.top = e.clientY - this.offsetTop + "px"
            circle.style.left = e.clientX - this.offsetLeft + "px"
            circle.style.transform = "translate(-50%, -50%) scale(0)"
            setTimeout(() =>{
                this.removeChild(circle)
            }, 1100)
        })
    })
    targetsToHidden.forEach((target) =>{
        let targeted = document.querySelector(target.getAttribute("water-hidden-target"))
        target.addEventListener("click", () =>{
            targeted.classList.toggle("hidden")
        })
        
    })
    targetsToDelete.forEach((target) =>{
        let targeted = document.querySelector(target.getAttribute("water-delete-target"))
        target.addEventListener("click", () =>{
            targeted.parentElement.removeChild(targeted)
        })
    })
    tooltips.forEach((tooltip) =>{
        let span = document.createElement("div")
        span.setAttribute("class", "tooltip-icon")
        tooltip.appendChild(span)
    })

    // module.exports(Water, "water")
})()
