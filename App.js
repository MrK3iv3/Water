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
        if(targeted.classList.contains("nav-sm-responce" || "nav-md-responce" || "nav-lg-responce" || "nav-xl-responce") && targeted.classList.contains("nav-responced")) target.addEventListener("click", () =>{
            targeted.classList.toggle("hidden", "nav-responced")
        })
        else if(!targeted.classList.contains("nav-sm-responce" || "nav-md-responce" || "nav-lg-responce" || "nav-xl-responce")) target.addEventListener("click", () =>{
            targeted.classList.toggle("hidden", "nav-responced")
        })
        
    })
    targetsToDelete.forEach((target) =>{
        let targeted = document.querySelector(target.getAttribute("water-delete-target"))
        target.addEventListener("click", () =>{
            targeted.parentElement.removeChild(targeted)
        })
    })
    tooltips.forEach((tooltip) =>{
        let span = document.createElement("span")
        span.setAttribute("class", "tooltip-icon")
        tooltip.appendChild(span)
    })
    let resize = () =>{
        if(document.body.offsetWidth <= 576){
            document.querySelectorAll(".nav-sm-responce").forEach((nav) =>{
                nav.classList.add("hidden", "nav-responced")
                if(nav.classList.contains("nav-responced")){
                    document.querySelectorAll("[water-nav-target]").forEach((target) =>{
                        let targeted = document.querySelector(target.getAttribute("water-nav-target"))
                        targeted.style.backgroundColor = "#343a40"
                        targeted.style.width = "100%"
                        targeted.style.paddingTop = "0px"
                        target.addEventListener("click", () =>{
                            if(targeted.style.paddingTop == "56px"){
                                targeted.classList.add("hidden")
                                targeted.parentElement.nextElementSibling.style.paddingTop = "56px"
                                targeted.style.paddingTop = "0px"
                            }else{
                                targeted.classList.remove("hidden")
                                targeted.parentElement.nextElementSibling.style.paddingTop =  "74px"
                                targeted.style.paddingTop = "56px"
                            }
                        })
                    })
                }
            })
        }else if(document.body.offsetWidth <= 768){
            document.querySelectorAll(".nav-sm-responce").forEach((nav) =>{
                nav.classList.remove("hidden", "nav-responced")
            })
            document.querySelectorAll(".nav-md-responce").forEach((nav) =>{
                nav.classList.add("hidden", "nav-responced")
            })
        }else if(document.body.offsetWidth <= 992){
            document.querySelectorAll(".nav-md-responce").forEach((nav) =>{
                nav.classList.remove("hidden", "nav-responced")
            })
            document.querySelectorAll(".nav-lg-responce").forEach((nav) =>{
                nav.classList.add("hidden", "nav-responced")
            })
        }else if(document.body.offsetWidth <= 1200){
            document.querySelectorAll(".nav-lg-responce").forEach((nav) =>{
                nav.classList.remove("hidden", "nav-responced")
            })
            document.querySelectorAll(".nav-xl-responce").forEach((nav) =>{
                nav.classList.add("hidden", "nav-responced")
            })
        }else if(document.body.offsetWidth > 1200){
            document.querySelectorAll(".nav-xl-responce").forEach((nav) =>{
                nav.classList.remove("hidden", "nav-responced")
            })
        }
    }
    resize()
    window.addEventListener("resize", resize)
    
    // module.exports(Water, "water")
})()