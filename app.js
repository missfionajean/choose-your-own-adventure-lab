// starts with a blank slate for a cleaner appearance
console.clear()

// creates callable prompt function
const prompt = require('prompt-sync')()

// creates a function for advancing when there's no choice
function enterToContinue() {
    prompt(`(Press ENTER to continue, ${username})`)
    console.clear()
}

// creates a health system that stores and updates condition
const life = [`ULTRA HEALTHY`,`SUPER HEALTHY`,`HEALTHY`,`INJURED`,`DYING`, `DEAD`]
let currentLife = 2
function updateLife(upordown) {
    if (upordown == `up`) {
        currentLife--
    } else if (upordown == `down`) {
        currentLife++
    }
    const updatedLife = life[currentLife]
    console.log(`You are now ${updatedLife}!\n`)
    if (updatedLife == `DEAD`) {
        console.log("GAME OVER\n")
        prompt(`(Press ENTER to exit, ${username})`)
        console.clear()
        process.exit(0)
    }
}

// gets name from user, clears terminal and prints intro
console.log(`Why hello there, traveler...
    
What is your name?

(Type preferred name and press ENTER)`)
const username = prompt(`> `)
console.clear()
console.log(`Welcome, ${username}!

You are about to embark on a perilous journey. Filled to the
brim with danger, daring and worst of all... headwear!

This is...

HAT QUEST!!!\n`)

enterToContinue()

console.log(`Poor ${username}... A dark road stretches out before you.

A chill wind blows through the shadows of black trees. Home is
somewhere far from here. You begin to wonder how you ended up
in such a foreboding, moonless place.
    
You see the silhouette of a HAT lying in the path before you.

What do you do?

1: Put on the hat.
2: Run for your life!

(Press a number key followed by ENTER)`)

// set a variable to direct player to different zones
let destination = '0'

// prevents player from revisiting completed zones
let forestVisited = false
let pathVisited = false
let mountainVisited = false

// creates an infinite loop to force a `1` or `2` result
// tutorial choice that leads to the same screen either way
while (true) {
    let choice = prompt(`> `)
    if (choice == 1) {
        console.clear()
        console.log(`Don't you know better than to put on strange HATS?
        
The HAT sprouts teeth and chomps your head! You yank it off
your dome hurriedly!\n`)
        updateLife(`down`)
        break
    } else if (choice == 2) {
        console.clear()
        console.log(`Wise choice, ${username}!
            
The HAT flies into the air like a bat! It lunges for you, 
but misses!\n`)
        break
    } else {console.log(`Please enter a valid number!`)}
}

enterToContinue()

console.log(`Shaking off the fright, you realize you need to run!
    
Where do you run to?

1: Into the pitch-dark forest...?
2: I don't run. I fight my battles!
3: Toward a mysterious singing voice further down the path.

(Press a number key followed by ENTER)`)

// infinite loop that determines which if statement will be read next
while (true) {
    let choice = prompt(`> `)
    if (choice == 1) {
        console.clear()
        console.log(`You tear into the shadows at breakneck speed!\n`)
        destination = `forest`
        break
    } else if (choice == 2) {
        console.clear()
        console.log(`You rend the HAT brim from brim, but not without cost.\n`)
        updateLife(`down`)
        destination = `path`
        break
    } else if (choice == 3) {
        console.clear()
        console.log(`You gulp audibly and set off down the path, toward
the dim outline of an enormous mountain...\n`)
        destination = `mountain`
        break
    } else {console.log(`Please enter a valid number!`)}
}
    
enterToContinue()

while (true) {
    if (destination == `forest`) {
        console.log(`Evil laughter seems to follow you, ${username}. You keep running
until all the laughter and light is gone from your perception.
There is only darkness. And a rustling in the brush just a few
feet away!

What do you do?

1: Attack!
2: Lie in wait...

(Press a number key followed by ENTER)`)
        while (true) {
            let choice = prompt(`> `)
            if (choice == 1) {
                console.clear()
                console.log(`You leap into the brush, teeth gnashing!

You find it was another traveler. They now lie motionless at
your feet. Are you really any better than the evil HAT from
the path...?\n`)
                forestVisited = true
                enterToContinue()
                break
            } else if (choice == 2) {
                console.clear()
                console.log(`You wait patiently, weighing your options.
                    
A fellow lost traveler emerges from the brush. They speak.

"Oh, good! Another lost soul. I think I've almost found the
secret of this place. But first, take this..."

They give you an elixir!\n`)
                updateLife(`up`)
                enterToContinue()
                console.log(`They open their mouth to speak further, but are cut short!
                    
A swarm of fedoras roils out of the darkness and swallows them
whole! You have no choice but to run!\n`)
                forestVisited = true
                enterToContinue()
                break
            } else {console.log(`Please enter a valid number!`)}
        }
    } else if (destination == `path`) {
        console.log(`An old man steps from the shadows into the path. He slowly
begins to clap. It's unsettling. A fancy HAT sits on his head.
            
"Oh, jolly good show!" he says. Your blood turns to ice in 
your veins. You realize he's also made entirely of HATS!

What do you do?

1: Nope outta there!
2: Compliment his HATS (i.e. body..?)

(Press a number key followed by ENTER)`)
        while (true) {
            let choice = prompt(`> `)
            if (choice == 1) {
                console.clear()
                console.log(`You run off without waiting for this "man" to speak.
                    
He chases you with extraordinary vigor, but you eventually
lose him. However, in this world of shadow, you trip over
quite a few rocks on the way!\n`)
                updateLife(`down`)
                pathVisited = true
                enterToContinue()
                break
            } else if (choice == 2) {
                console.clear()
                console.log(`The man is taken aback and blushes heavily. As much as HATS can.
                    
He lets you in on a secret: "Explore all there is this world
to offer. Survive and you shall meet the Pale Lady. Oh and
trust the strange voice. It means well, but is quite easily
offended."

His "eyes" roll back in his head and with that, he's gone!\n`)
                enterToContinue()
                pathVisited = true
                break
            } else {console.log(`Please enter a valid number!`)}
        }
    } else if (destination == `mountain`) {
        console.log(`You come to the mouth of a yawning cave. You reluctantly enter.

In the darkness, you hear a voice say "Place it upon your head."

Suddenly, a fine feathered cap appears in your hands. It is
smooth to the touch and the mysterious singing from before
rings loudly in your ears. The melody is both haunting and
comforting...

What do you do?

1: Wear it!
2: Don't wear it...

(Press a number key followed by ENTER)`)
        while (true) {
            let choice = prompt(`> `)
            if (choice == 1) {
                console.clear()
                console.log(`You place it upon your head and the singing turns jolly!
                    
You feel vigor re-enter your body and though you can't see it,
you look damn good in that HAT!\n`)
                updateLife(`up`)
                enterToContinue()
                mountainVisited = true
                break
            } else if (choice == 2) {
                console.clear()
                console.log(`The singing stops and a vengeful scream fills the air!
                    
A shadowy claw smack into you!\n`)
                updateLife(`down`)
                console.log(`Just for good measure, it smacks you again!\n`)
                updateLife(`down`)
                enterToContinue()
                mountainVisited = true
                break
            } else {console.log(`Please enter a valid number!`)}
        }
    }
    if (forestVisited && pathVisited && mountainVisited) {
        break
    }
    console.clear()
    console.log(`It seems this place holds no more mystery. Where to next?
    
1: Check out the forest.
2: Back to the path.
3: Follow the mysterious singing.
            
(Press a number key followed by ENTER)`)
    while (true) {
        let choice = prompt(`> `)
        if (choice == 1) {
            if (forestVisited) {
                console.log(`You've already been there!`)
            } else {
                destination = `forest`
                console.clear()
                break
            }
        } else if (choice == 2) {
            if (pathVisited) {
                console.log(`You've already been there!`)
            } else {
                destination = `path`
                console.clear()
                break
            }
        } else if (choice == 3) {
            if (mountainVisited) {
                console.log(`You've already been there!`)
            } else {
                destination = `mountain`
                console.clear()
                break
            }
        } else {console.log(`Please enter a valid number!`)}
    }
}

console.log(`Trudging off into the unknown, you see a faint shimmering light.
    
The light materializes into the form of a beautiful woman. She
wears no HAT. Strange. She speaks in an unearthly tone...

"You have survived this world of brutal darkness and cranial
accessories. I am most impressed. It is time I tell you the
secret of this place. It has all been in your head. You hit
your head after buying a beanie from H&M. A lamp-post fell
right on top of you. If not for the beanie, you'd be dead."

You consider this... Could it be the truth? She speaks again.

"All you need to do to leave is choose to re-enter the waking
world. Or... You could stay here in the land of shadow and
rule by my side, oh ${username} - Champion of Headwear.

What do you do?

1: Stay
2: Go
            
(Press a number key followed by ENTER)`)

while (true) {
    let choice = prompt(`> `)
    if (choice == 1) {
        console.clear()
        console.log(`You stay and usher in a new era of peace in this place!\n`)
        break
    } else if (choice == 2) {
        console.clear()
        console.log(`You wake in the street and begrudgingly go back to your
non-magical life. But at least you're alive!\n`)
        break
    } else {console.log(`Please enter a valid number!`)}
}

// ends the story and auto-exits the program
console.log(`The End\n`)
prompt(`(Press ENTER to exit, ${username})`)
console.clear()