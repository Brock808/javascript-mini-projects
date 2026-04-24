let message = prompt('Insert Name Event + date time with format YYYY-MM-DD HH:MM (24hs clock)')
 
let index = message.search(/\d/)

let nameEvent = message
        .slice(0, index)
        .trim()
        .toLowerCase();
console.log(nameEvent)

let takeTimeISO = message
        .slice(index)
        .replace(/ /, 'T')
console.log(takeTimeISO)


const event = {
    name: nameEvent,
    date: new Date(takeTimeISO),

    timeForEvent(){
        let timeNow = new Date() 
        return this.date - timeNow
    }

};


const id = setInterval(function (){
    let timeEvent = event.timeForEvent()
    console.log(`The time remaining for the event is ${timeEvent} ms`)

    if(timeEvent < 0){
        clearInterval(id)
        console.log('The event has started :)')
    } else {

    };

}, 1000)
