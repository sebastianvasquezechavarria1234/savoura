import '../stylos/BtnMn.css'

export const BtnMn =  () => {
    return(
        <div id="menuToggle">
                       <input id="checkbox" type="checkbox"/>
                            <label class="toggle" htmlFor="checkbox">
                            <div class="bar bar--top"></div>
                            <div class="bar bar--middle"></div>
                            <div class="bar bar--bottom"></div>
                             </label>
                            </div>
    )
}

// const menuToggle = document.getElementById("menuToggle").addEventListener("click", MostrarMn);
// const body = document.querySelector("body");

// function MostrarMn () {
//     body.style.color = "red"
// }

