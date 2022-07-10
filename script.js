const inputmail = document.getElementById("entermail")


inputmail.addEventListener('click', (e) => {
    console.log(e.target.value)
    if (e.target.value==="") {
        const smalltext = document.getElementById("smalltext")
        smalltext.style.display= "block";
       
    }
   
})
inputmail.addEventListener('keypress' , (e) => {
    if (e.target.value==="") {
        const smalltext = document.getElementById("smalltext")
        smalltext.style.display= "block";
       
    }
    else{

    
    const smalltext = document.getElementById("smalltext")
        smalltext.style.display= "none";
    }


})

const active = document.querySelectorAll('.answer');
const questions = document.querySelectorAll('.questions');

questions.forEach(question => {
    console.log(question)
    question.addEventListener('click', () => {
        
       
         question.classList.toggle('active')
   
         
         })
});

