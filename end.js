const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
//console.log('finalScore = '+finalScore);
//console.log('mostRecentScore = '+mostRecentScore);
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();
    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    console.log(score,"scoew");
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    
    localStorage.setItem('highScores', JSON.stringify(highScores));
    
};
