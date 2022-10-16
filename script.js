function makeVisible(dots) {
    dots.forEach((dot) => {
        dot.style.visibility = 'visible'
    })
}

function SetDice(diceNum, score) {

    let dots = []
    
    for(let i = 1; i <= 9; i++){
        dots.push(document.querySelector(`.dice${diceNum} .dot${i}`));
    }

    dots.forEach((dot) => {
        dot.style.visibility = 'hidden'
    })

    switch (score) {
        case 1: 
            makeVisible([dots[4]])
            break
        case 2: 
            makeVisible([dots[1], dots[7]])
            break
        case 3:
            makeVisible([dots[0], dots[4], dots[8]])
            break
        case 4:
            makeVisible([dots[0], dots[8], dots[2], dots[6]])
            break
        case 5:
            makeVisible([dots[0], dots[4], dots[8]], dots[2], dots[6])
            break
        case 6:
            makeVisible([dots[0], dots[2], dots[3], dots[5], dots[6], dots[8]])
            break
        default:
            console.log('Kya chutiyapa hain yeh??') 
    }

}

function play() {
    
    let score1 = Math.ceil(Math.random() * 6)
    let score2 = Math.ceil(Math.random() * 6)

    SetDice(1, score1)
    SetDice(2, score2)

    if (score1 > score2)
        showResult(1)
    else if (score1 < score2)
        showResult(2)
    else
        showResult(0)

}

play();

function showResult(winner) {
    document.getElementById('title').innerHTML = `${winner == 0 ? 'Game draws' : `Player ${winner} wins!!`}`
    
}

document.querySelector('button').addEventListener('click', () => {
    play()    
})