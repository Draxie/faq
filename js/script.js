let questions=document.getElementsByClassName('question');
let answers=document.getElementsByClassName('answer');
let arrows=document.getElementsByClassName('arrow');
for (i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", Collapse, false);
}

function Collapse(){
    console.log("Cao");
    for(let i=0;i<answers.length;i++){
        answers[i].className="answer collapsed";
        arrows[i].className="arrow";
        questions[i].style.fontWeight="400";
        if(this==questions[i]){
            answers[i].className="answer";
            arrows[i].className="arrow rotated";
            questions[i].style.fontWeight="700";
        } 
    }
}