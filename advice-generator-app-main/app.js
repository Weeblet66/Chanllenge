const btn = document.querySelector('.random-generator');
const num = document.querySelector('.number');
const advice = document.querySelector('.advice')
const url = "https://api.adviceslip.com/advice"

btn.addEventListener('click',()=>{
fetch(url)
.then(response => response.json())
.then(data => {
    num.innerHTML = data.slip.id;
    advice.innerHTML = data.slip.advice
    console.log(data)
});

})