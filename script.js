const emojiDetail = [
    {
        des: `Lol`,
        emoji: `😂`
    },

    {
        des: `ThumbsUp`,
        emoji: `👍`
    },
    
    {
        des: `Cool`,
        emoji: `😎`
    },
    
    {
        des: `Sad`,
        emoji: `😌`
    },
    
    {
        des: `Heart`,
        emoji: `💖`
    }
];

let emojiTracker = 0;
const timerText = document.querySelector('.timer');

displayEmoji();
timer();

function displayEmoji(){
    const emoji = document.getElementById('emoji');
    emoji.innerText = '';   
    emoji.innerText = emojiDetail[emojiTracker].emoji;
};

function timer(){
    let second = 0;

    let timer = setInterval(() => {
        timerText.innerText = `${second}`;

        if(second>=30){
            clearInterval(timer);
            if(emojiTracker!=emojiDetail.length-1){
                nextEmoji();
            }else{
                reset();
            }
        }
        second++;
        
    }, 1000);
}

/////////////////NEXT DISPLAY EMOJI FUNCTION///////////////////

function nextEmoji(){
    emojiTracker++;
    setTimeout(()=>{
        document.querySelector('.cowr').innerText = "";
    },1000);
    timer();
    displayEmoji();
}

////////////////////////////CHECK GUESS/////////////////////// 

const inputGuess = document.querySelector('.guess-input');
const cowr = document.querySelector('.cowr');

let score = 0;

inputGuess.addEventListener('keypress' , (k) => {
    if(k.key === 'Enter'){
        const ans = inputGuess.value.trim().toLowerCase();

        if(ans === emojiDetail[emojiTracker].des.toLowerCase()){
            cowr.innerText = `Correct!!`;
            score++;
            document.querySelector('.score').innerText = `Score : ${score}`
        }else{
            cowr.innerText = `Wrong!!`;
        }

        inputGuess.value = '';
        inputGuess.focus();

        if(emojiTracker === emojiDetail.length-1){
            reset();
        }else{
            nextEmoji();
        }
    }
});

///////////////////////////Reset Game Button///////////////////////////
const resetBtn = document.querySelector('#resetGame');

function reset(){
    resetBtn.style.backgroundColor = 'grey';
    emojiTracker = 0;
    score = 0;
    document.querySelector('.score').innerText = `Score : ${score}`;

    let d = 0;

    let dis = setInterval(()=>{
        console.log(d);
        if(d==1){
            resetBtn.style.backgroundColor = '';
            clearInterval(dis);
        }
        d++;
    },100)

    timer();
    displayEmoji();
}

resetBtn.addEventListener('click' , reset);
