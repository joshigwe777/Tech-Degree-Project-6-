const btn_reset = document.querySelector('.btn_reset');
const overlay = document.querySelector('#overlay');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
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
let ul = document.querySelector('#phrase ul');
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



qwerty.addEventListener('click', (e) => {
    let clickedletter = e.target.textContent;
    console.log(clickedletter);
    function checkLetter(l) {
        
        const letters = document.getElementsByClassName('letter');
        
        if (letters.includes(l))
        for(var i=0; i<letters.length; i++){
            let li = letters[0];
            console.log(letters[i].textContent);
            
            if(letters[i].textContent.toLowerCase() == (l)) {
                //how do we ensure that this function works not just for the first letter. As we have it now it checks the first 
                
                li = letters[i];
                console.log(li);
                li.parentNode.children[i].className = 'show';
                //console.log(li.className);
            }   else {
                missed+=1;
                return null;
            }
        }
    }
    checkLetter(clickedletter);
});







