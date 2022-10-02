const  modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const btn = document.getElementById("modal_button");
const btn2 = document.getElementById("block2_button")

btn.addEventListener("click",() => {
    modal.style.display = "block";
})
btn2.addEventListener("click",() => {
    modal.style.display = "none";
})
span.addEventListener("click",() => {
    modal.style.display = "none";
})

window.addEventListener("click",() => {
    if (event.target == modal) {
              modal.style.display = "none";
         }
})
