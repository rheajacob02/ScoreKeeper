const select=document.querySelector('select');
const player1=document.querySelector('.player1');
const player2=document.querySelector('.player2');
const resetBtn=document.querySelector('.reset');
let p1Display=document.querySelector('.p1score')
let p2Display=document.querySelector('.p2score')

let p1score=0,p2score=0;
let rounds=3

select.addEventListener('change',function(){
    rounds=select.value;
    reset();
})

function reset(){
    p1score=0;
    p2score=0;
    p1Display.innerText='0';
    p2Display.innerText='0';
    p1Display.classList.remove('winner','loser');
    p2Display.classList.remove('winner','loser');
}

player1.addEventListener('click',function(){
    if(p1score<rounds && p2score<rounds){
        p1score++;
        p1Display.innerText=p1score;
    }
    if(p1score==rounds){
        console.log("p1 won")
        p1Display.classList.add('winner');
        p2Display.classList.add('loser');
        player1.classList.add('disabled');
    }
})

player2.addEventListener('click',function(){
    if(p1score<rounds && p2score<rounds){
        p2score++;
        p2Display.innerText=p2score;
    }
    if(p2score==rounds){
        p2Display.classList.add('winner');
        p1Display.classList.add('loser');
    }
})

resetBtn.addEventListener('click',reset)