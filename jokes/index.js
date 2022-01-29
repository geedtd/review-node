import * as jokes from 'give-me-a-joke'
import * as colors from 'colors'
// console.dir(jokes)

jokes.getRandomCNJoke(function(joke){
    console.log(joke.rainbow)
})

jokes.getRandomDadJoke(joke => console.log(joke.green))