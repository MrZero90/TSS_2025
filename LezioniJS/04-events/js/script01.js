function salutami(){
    document.querySelector("#demo").innerHTML = "<h1>Ciao Dario</h1>";
}

// in disuso
let btn2 = document.querySelector("#btn2");
btn2.onclick = salutami;

let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", salutami);

let demo = document.querySelector("#demo");
demo.addEventListener("mousemove", function(){
    demo.setAttribute("style", "background-color: blue");
})

demo.addEventListener("mouseleave", function(){
    demo.removeAttribute("style");
})

