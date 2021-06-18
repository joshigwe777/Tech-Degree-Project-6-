const btn_reset = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const ol = document.querySelector('ol');
const hearts = ol.children;
let missed = 0;
const phrases = ['Anthony Davis', 'Lebron James', 'Chris Paul', 'Kawhi Leonard', 
                'Kyrie Irving', 'James Harden', 'Mike Conley', 'Donovan Mitchell'];

overlay.addEventListener('click', (e) => {
    overlay.style.display = 'none';
});
    function getRandomPhraseArray(arr) {
    let num = Math.floor(Math.random()*arr.length);
    let result = phrases[num].split('');
    return result;
}
let ul = document.querySelector('ul');
function addPhraseToDisplay(arr){
    for(var i=0; i<arr.length; i++){
        let li = document.createElement('li');
        let char = arr[i];
        li.textContent = char;
        ul.appendChild(li);
        if(char == ' ') {
            li.className = 'space';
        }   else {
            li.className = 'letter';
        }
    } 
    return ul;
}

addPhraseToDisplay(getRandomPhraseArray(phrases));
let phrasearray = [' '];
for(var i=0; i<ul.children.length; i++) {
    phrasearray.push(ul.children[i].textContent.toLocaleLowerCase());
}

function checkLetter(l) {    
    const letters = document.getElementsByClassName('letter');
    if(phrasearray.includes(l)) {
        for(var i=0; i<ul.children.length; i++){
            let li = ul.children[i];
            let lip = li.textContent;
            console.log(lip);
            if(lip.toLowerCase() == (l)) {
                console.log(lip);
                li.parentNode.children[i].className = 'show letter';
            }   
        }
    } else {
        return null;
    }
}
//Checks to see if the player has won the game or lost. Screen is displayed accordingly//
function checkWinner() {
    const showing = document.getElementsByClassName('show');
    const lettersclass = document.getElementsByClassName('letter');
    console.log(showing.length);
    console.log(lettersclass.length);
    if(showing.length == lettersclass.length) {
        let resetgame = document.getElementById('resetgame');
        resetgame.style.display = 'block';
        overlay.className = 'win';
        overlay.style.display = '';
        document.querySelector('h2').textContent = 'Congratulations! You Won!' 
        reset(); 
    }   else if(missed >= 5) {
            let resetgame = document.getElementById('resetgame');
            resetgame.style.display = 'block';
            overlay.className = 'lose';
            overlay.style.display = '';
            document.querySelector('h2').textContent = 'You lost this round. Refresh to try again!';
            reset(); 
    }
}


//when a letter is clicked it changes call to 'chosen' the style makes the button darker blue//
qwerty.addEventListener('click', (e) => {
    let clickedletter = e.target;
    let clickedlettervalue = clickedletter.textContent;
    clickedletter.className = 'chosen';
    clickedletter.setAttribute('disabled', true);
    
    let letterFound = checkLetter(clickedlettervalue);

    if(letterFound === null) {
        missed+=1;
        hearts[missed-1].firstChild.setAttribute('src', 'images/lostHeart.png');
    }
    checkWinner();
});




function reset() {
    let buttons = document.querySelectorAll('.keyrow button');
    let lis = ul.children;
    let ols = ol.children;
    console.log(ols[0]);
    for(var i=0; i<lis.length; i++) {
        lis[i].remove();
    }
    for(var j=0; j<buttons.length; j++) {
        buttons[j].className = '';
        buttons[j].setAttribute('disabled', false);
    }
    for(var k=0; k<ols.length; k++) {
        ols[k].firstChild.setAttribute('src', 'images/LiveHeart.png');

    }
    addPhraseToDisplay(getRandomPhraseArray(phrases)); 
}










