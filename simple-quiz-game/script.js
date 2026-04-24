const questions = [
    {question:'How much is it: 5+5', answer: 10},
    {question:'How much is it: 14+6', answer: 20},
    {question:'How much is it: 60 + 40', answer:100},
    {question:'How much is it: 245 + 255', answer:550},
    {question:'How much is it: 255 + 997 + 323', answer:1545},
];

const point = {
    count: 0,

    addPoint(){
        this.count++
    }
};

let message;

for(const valueQuestions of questions){
    message = Number(prompt(valueQuestions.question))
    if(message === valueQuestions.answer){
        point.addPoint()
    } else {
      
    }
};

const timeForScore = setTimeout(() => {
    console.log(`Your score is: ${point.count}`)
}, 5000);
