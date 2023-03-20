/* 
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return writeCards;
} */

function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(number){
    let i = 0;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}