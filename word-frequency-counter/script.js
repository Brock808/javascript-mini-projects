let message = prompt('Write a sentence')

let messageToLower = message.toLowerCase().split(" ")

let storeEachWord = new Map()

for(let word of messageToLower){
    if(storeEachWord.has(word)){
        storeEachWord.set(word, storeEachWord.get(word) + 1)
    } else {
        storeEachWord.set(word, 1)
    }
}

console.log(storeEachWord)