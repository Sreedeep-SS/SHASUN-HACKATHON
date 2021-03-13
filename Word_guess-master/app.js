const fruits = {
    "grapes": "This fruit is a part of a saying that means that a person is pretending to dislike something because he/she cannot have it......",
    "jackfruit": "This is a large oblong fruit with spiny skin containing orange-yellow edible fleshy pulp known as 'bulbs. .........",
    "plum": " The dried version of this fruit is called a prune",
    "strawberry": "This fruit is actually a member of the rose family. The seeds of this fruit are on its outside surface",
    "throne": "the special chair that a king or queen sits on",
    "navy": "the part of a country's military force trained to fight at sea",
    "fleet": "a group of ships",
    "ganges": "Name of the Indian Holy River",
    "palaeontology": "Another name for the study of fossils, starts with 'P' ",
    "ankara": "Capital of Turkey..starts with 'A'",
    "rupee": "The official currency in Nepal, starts with 'R' ",
    "aluminium": "The lightest existing metal, starts with 'A'",
    "asana": "A yoga posture, starts with 'A'",
    "dictionary": "another word for lexicon",
    "uranus": "seventh planet from the sun",
    "amazon": " world's longest river",
    "pisa": " Italian city which has a famous leaning tower",
    "koalas": "An animal which eats mainly eucalyptus leaves",
    "britain": " Who did America fight against in the Revolutionary War?",
    "jamestown": "The first English settlement in America",
    "mumbai": " The largest city in India",
    "finland": "A European country drinks the most coffee per person",



}

//to pick a random colour

// function random_rgba() {
//     var o = Math.round,
//         r = Math.random,
//         s = 255;
//     x = 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(5) + ')'
//     console.log(x)
//     return x;
// }
// let color = random_rgba();


let words = Object.keys(fruits) // adding fruits key to an array
let guessed = [] // to store the letters guessed by the user if it is correct
let word = '' //to store random words selected from the array


// to select rand wrds 
function random() {
    word = words[Math.floor(Math.random() * words.length)];

}
let counter = 31


function startTime() {

    if (counter == 0) {




        document.getElementById('cor').style.display = 'block'
        document.getElementById('cor').innerHTML = "Time Out! Try Again.."
        document.getElementById('cor').style.color = 'rgb(226, 51, 51)'
        clearInterval(time)
        setTimeout(function() {

            reset()


        }, 500)







    } else {
        counter--
    }

    document.getElementById('sec').innerHTML = counter;
}




function guess_letter() {
    let word_letter = word.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('') // to generate '_' for the letters
    document.getElementById('guess').innerHTML = word_letter.toUpperCase() // print the letters selected by the user if it is correct
        //to display correct message
    if (word_letter === word) {
        document.getElementById('cor').style.color = 'rgb(0, 143, 21)'

        document.getElementById('cor').innerHTML = "Correct!"
        document.getElementById('cor').style.display = 'block'
        words = words.filter(e => e !== word) //to remove the word from the array to avoid repetition of words

    }
    // reset after 1000 miliseconds if the user win
    setTimeout(function() {
        if (word_letter === word) {
            reset()
        }

    }, 1000)



}


function reset() {
    counter = 31
    startTime()

    // color = random_rgba();
    //stop if no words left in the array
    if (words.length === 0) {
        alert("You Won!")
    }
    guessed = []; //reset the previously stored array contents
    random()
        // console.log(word)
    document.getElementById('clue1').innerHTML = fruits[word] + "&nbsp &nbsp" + "Hint:(" + word.length + " letter word)" //to print the word clues 
    x = document.getElementById('score1').textContent // to get the no of mistakes 
    y = parseInt(x, 10) // convert str to int
    y = 5
    document.getElementById('score1').innerHTML = y
    guess_letter()
    genbutton(); //reset the onscreen keyboard
    document.getElementById('cor').style.display = 'none'
    console.log(words)

}





function start() {
    var time = setInterval(function() { startTime() }, 1000);
    document.getElementById('time').style.display = 'block'
    genbutton(); // onscreen keyboard
    //console.log(word)
    document.getElementById('reset').id = 'reset1'
    document.getElementById('score').id = 'score2'

    document.getElementById('clue').innerHTML = fruits[word] + "&nbsp &nbsp" + "Hint:(" + word.length + " letter word)"
    document.getElementById('start').disabled = true //disable start button once it is clicked
    document.getElementById('start').id = 'start1' // to turn the button to red color
    document.getElementById('clue').id = 'clue1' // to display the clues box the id is renamed
    guess_letter()


}

// function to handle guessing words
function guess(letter) {
    x = document.getElementById('score1').textContent // to get the mistake count
    y = parseInt(x, 10)
    let r = word.split('') // to seperate the letters 
    letters = letter.toLowerCase()



    if (y > 0) {

        if (r.includes(letters)) {
            //console.log(letters)
            guessed.indexOf(letters) === -1 ? guessed.push(letters) : null // if the guessed letter is correct and if it is already not in the array then the letter will be pushed into the array
            document.getElementById(letter).setAttribute('disabled', true) // if the key is pressed then it will be disabled
            document.getElementById(letter).style.backgroundColor = 'rgb(99, 236, 133)'
            document.getElementById(letter).style.color = 'white'



            // to check if all the letters are included
            if (word.indexOf(letters) >= 0) {
                guess_letter()
            }



        } else {
            if (document.getElementById('start1').disabled = true) { // this starts once the start button is clicked and disabled
                z = y - 1

                document.getElementById('score1').innerHTML = z
                document.getElementById(letter).setAttribute('disabled', true)
                document.getElementById(letter).style.backgroundColor = 'rgb(236, 72, 72)'
                document.getElementById(letter).style.color = 'white'
            }


        }

    } else {
        document.getElementById('cor').style.color = 'rgb(226, 51, 51)'
        document.getElementById('cor').innerHTML = "Wrong! The Answer is " + word.toUpperCase() + ".."

        document.getElementById('cor').style.display = 'block'
        setTimeout(function() {

            reset()


        }, 1000)
    }





}


//to generate the onscreen keyboard
function genbutton() {
    // create individual buttons for each letter by splitting the letters and mapping


    let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => `
    
    <button id='` + letter + `' onclick= "guess('` + letter + `')" style ="background-color:rgba(62,210,215,0.97233)" >
    ` + letter + `
    </button>
    `).join('')
    document.getElementById('keyboard').innerHTML = alph //to display the buttons

}

// instructions onclick function (to be completed)
let inst = document.getElementById('inst')
inst.addEventListener('click', function() {
    alert('working')
})



// generate the random words
random()