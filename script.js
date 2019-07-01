const readlineSync = require('readline-sync')

function end () {
    console.log('Goodbye!')
}

//Story line Intro Block
let userName = readlineSync.question("Welcome Wyncode Warrior!\nThank god you are here to help fight off the most dangerous gang in town...the 404s!\nWhat's your name?\n")
console.log("Which weapon will you be bringing with you today?")
weapons = ['Array Slicer', 'Menace Map', 'Object Obliterator']
index = readlineSync.keyInSelect(weapons, 'Which weapon?')
console.log(`Ok ${userName}, grab your ${weapons[index]}... it's go time!`)

// First interaction -- computer is out of battery
console.log("\n\n\nUh oh.... The 404s have cut all electricity from the Wynbase!\nWe can't let our students' laptops run out of battery...\nTo fire up the backup generator, unscramble this word.")
readlineSync.question(`Can you do it, ${userName}?`) 
console.log('\n\n\nUnscramble the word below')

//The function to randomly shuffle the letters
String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var tmp = a[i]
        a[i] = a[j]
        a[j] = tmp
    }
    return a.join("")  
}
console.log("ancient".shuffle())

// The options for if you get it right or not
let wordGuess = readlineSync.question(`Can you figure out the secret password?`)
console.log(wordGuess + ' you say?')
console.log(wordGuess === 'ancient')

const handleGuess = (wordGuess) => {
    // ****Something is wrong with this if!!!
    if (wordGuess === 'ancient') { 
        console.log("\n\nYou got it! Now everyone can charge in peace ✌🏼")
        
    } else {
        console.log('You didn\'t get there on time ☠️\nHopefully the next cohort will make it to the end')
          end()

      }
  }
handleGuess()       


//Where to question
const whereTo = () => { 
    if (wordGuess === 'ancient') { 
    console.log(`Don't let the 404s get away.\nWhere do you think they went?`)
    const placeChoice = readlineSync.question( "Options: Zak the Baker, Wynwood Walls, Veza Sur" )
    
        if (placeChoice == "Zak the Baker") { 
            console.log("\n\nWooooah! The line here is so long...and $5 for a croissant? \nHackers wouldn't hang here; try a different spot")
            whereTo()
        
        } else if (placeChoice == "Wynwood Walls") {
            console.log('The 404s got you wrapped up in a gaggle of tourists! You\'ll never catch them in time.\nHopefully the next cohort will make it to the end ☠️')
            end()
        
        } else {
            console.log(`\n\nKnew they\'d be here! Get your ${weapons[index]} ready!\n\n`)
            console.log("You didn\'t think you'd be fighting alone, did you? Choose a sidekick")
            sidekick = ['Andy', 'Bria', 'Izzy', 'Don']
            index = readlineSync.keyInSelect(sidekick, 'Which sidekick?')
            console.log(`With ${userName} and ${sidekick[index]} together, there's no way the 404s can win\n`)
            console.log('You can see the 404 exclusive laptop sticker from miles away. Last chance to turn back...\n\n\n')
            readlineSync.question( "Are you ready to kick some ass?\n\n\n\n")

                //Final fight
                let reasonWhy = readlineSync.question('\n\nYou approach the head honcho. \nHe asks why you are here\n\n\n')
                console.log(`"${reasonWhy}"! He mocks back at you.\n I\'ll leave your city alone...\n if you can beat me in rock paper scissors!\n\n`)

                //rock, pap, scis
                console.log(`${sidekick[index]} pats you on the back. You've been training for this!`)
                console.log(`Rock...Paper...Scissors...shoot!`)
                shoot = ['Rock', 'Paper', 'Scissors']
                index = readlineSync.keyInSelect(shoot, 'shoot!')
                let yourShot = shoot[index]

                //Rock = .33 and under, paper = .66 and under, scissors .67-1.0
                //***trouble with or statements here */
                let hisShot =  Math.floor(Math.random())

                    if ((yourShot = "Rock" && hisShot <= .33) || (yourShot = "Paper" && hisShot >= .34 && hisShot <= .67)|| (yourShot = "Scissors" && hisShot > .67)) {

                    console.log("It's a tie!\nYou make a fist to play again, for the win.\nThe lead 404 laughs at you.\n\"I told you you needed to win... a tie is not a win!\nMwahahah Miami is mine!")
                    end()

                    } else if ((yourShot = "Rock" && hisShot >= .34 && hisShot <= .67) || (yourShot = "Paper" && hisShot > .67) || (yourShot = "Scissors" && hisShot <=.33)) {

                    console.log('You lose! The 404s will be on top forever!!!')
                    end()

                    }
                    else {
                    console.log('The head 404 falls to his knees. \nA deal is a deal, after all.\nYou have saved the city of Miami!! We owe you endless gratitude 🙌🏼')
                    end()
                    }
                }
                
    } else { 
        end()
    }
}
    whereTo()
