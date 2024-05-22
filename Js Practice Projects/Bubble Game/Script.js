

let timmer = 1020;
let score = 0;
let value;

function makeBubble(){
    let clutter = "";
    for (var i = 1; i < 190; i++) {
     num = Math.floor(Math.random()*10);
    clutter += `<div class="bubble"> ${num} </div>`;
    
}
document.querySelector(".bottom").innerHTML = clutter;

}

function runTimmer() {
   
   let time = setInterval(function(){
    if(timmer>0)
    {
    timmer--;
    document.querySelector("#time").textContent = timmer;
    }
    else {
        clearInterval(time);
       document.querySelector(".bottom").classList.add('gameOver');
    
        }
}, 1000)

}

function hit(){
     value = Math.floor(Math.random()*10);
    document.querySelector("#hitValue").innerHTML = value;
}

function scoreCount(){
    score += 10;
    document.querySelector("#score").innerHTML = score;
    
} 


function hitCheck(){
    document.querySelector(".bottom").addEventListener("click", function(details){
    let hitted = Number(details.target.textContent);
        if(hitted===value){
            scoreCount();
            makeBubble(); 
            hit();
        }
    })
}

function gameOver() {
    setTimeout( () => {
        document.querySelector(".container").style.display = "none";
        document.querySelector(".gameOver").style.display = "block";
        let finalScore = document.querySelector("#finalScore");
        finalScore.innerHTML = `Your Score : ${score}`
        console.log(score)
    },timmer*1000)
}

function playAgain()  {
   location.reload();
}

function play()  {
    document.querySelector(".container").style.display = "block"
    hitCheck();
    hit();
    runTimmer();
    makeBubble();  
    gameOver();
    document.querySelector(".play").style.display = "none"
}
    
  
    

 
