
const submit = document.querySelector('.submit');
const thanks = document.getElementById('thanks');
const allBtns = document.querySelectorAll('.btn-rate')
const rate = document.querySelector('.number-selection')
const intro = document.getElementById('intro')


submit.addEventListener('click',()=>{

})
const myFunction = (event) => {
    const clickedElem = event.target
    allBtns.forEach(btn => btn.classList.remove("active"))
    clickedElem.classList.add("active")
    rate.innerHTML = clickedElem.innerHTML
  }
submit.addEventListener('click',()=>{
    intro.style.display = 'none'
    thanks.style.visibility = "visible"
})

