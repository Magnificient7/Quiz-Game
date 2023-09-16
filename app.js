const quizdata = [
    {
        question: "1.Javascript is an _______ language?",
        option :[
            "Object Oriented","object based"," Procedural","None of Above"
        ],
        correct:0,
    },
    {
        question: "2.Which of the following keywords is used to define a variable in Javascript?",
        option :[
            "var","let","Both A and B","None"
        ],
        correct:2,
    },
    {
        question: "3.Which of the following methods is used to access HTML elements using Javascript?",
        option :[
            "getElementById()","document.querySlector()","Both A and B","None"
        ],
        correct:2,
    },
    {
        question: "4.Upon encountering empty statements, what does the Javascript Interpreter do?",
        option :[
            "Throws an error","Ignores the statement","Gives a warning","None"
        ],
        correct:1,
    }
]

// javascipt initailization-

// selecting div2 for last response
const quiz = document.querySelector(".div2");

// selecting all the inputs at once
const answerse = document.querySelectorAll(".answer");

// selection different labels at once using array destructing
const [questionelm,option_1,option_2,option_3,option_4] = document.querySelectorAll(
    ".question","#option_1","#option_2","#option_3","#option_4");

// selecting button
const btn = document.querySelector(".btn");



let currentQuiz = 0;
let score = 0;

//step 3- Load function quiz

const loadFunction = ()=>{
    const{question,option} = quizdata[currentQuiz];// quizdata index 0 values
// console.log(option);
    questionelm.innerText = question; 
// option is the new array , now traversing
//option.forEach((currentopt,index)=>(option_1.innerText = currentopt))
   
   option.forEach((currentopt,index)=>(window[`option_${index+1}`].innerText = currentopt))
    
}
const deselectCheckedFunction = ()=>{
     return answerse.forEach((iterate)=> iterate.checked = false)
}

loadFunction();

// finding oout which box is clicked
let  choosen;
const selectedCheckBox = ()=>{
// // this function traverse through answerse which is sselected, it will check whick button is clicked
// //and return an answer which is forwarded to next.
    //answerse.forEach((currentopt,index)=>{
    //         if(currentopt.checked){
    //             ans = index;
   //         }
   //     })
   //     return ans;
   let  answerConvertedArray = Array.from(answerse);
    choosen = answerConvertedArray.findIndex((cur)=>cur.checked)
    return choosen;

}

btn.addEventListener("click",()=>{
// here we had put an click event on button to find out which input box is clicked and created a 
// function which returns index
    const selectedIndexOption = selectedCheckBox();
     console.log(selectedIndexOption);
     if(selectedIndexOption === quizdata[currentQuiz].correct);{
        score++;
     }
     currentQuiz++;
     
     if(currentQuiz<quizdata.length){
        deselectCheckedFunction();
        loadFunction();
    }
     
     else{
        quiz.innerHTML = `
        <div class="result">
        <h2> Your score is =${score}/${quizdata.length} correct answer</h2>
        <p class="para">        Congrats on completing this quiz</p>
        <button class="reload" onclick="location.reload()">Play again</button>
        </div> 
        `;
     }
})




