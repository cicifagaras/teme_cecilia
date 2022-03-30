let direction = true //true e spre dreapta; false e spre stanga

for (let i = 1; i <= 100; i++) {
    if(i % 7 === 0 || contains(i)){
        direction = !direction;
        console.log(i + " BOLT");
    }
    else if(direction){
        console.log(i + " to the right");
    }
    else
        console.log(i + " to the left");
}

function contains(number) {
    if ((number + " ").indexOf("7") > -1){
        return true;
    }
    return false;
}