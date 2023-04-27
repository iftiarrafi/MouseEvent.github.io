const xa = document.getElementById("x");
const ya = document.getElementById("y");

window.addEventListener("mousemove" , (e)=>{

        xa.textContent = e.clientX -4;
        ya.textContent = e.clientY-7;
    
})
 