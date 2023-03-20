//FIrst Code Challenge

function writeCards(names, event) {
    let card = [];
    for (let i = 0; i < names.length; i++) {
        card.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return card;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");



//Second Code Challenge

function countDown(number){
    let i = 0;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}
countDown(10);

