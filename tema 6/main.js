console.log("main.js loaded...");

/**
 * Exercise 1
 * O functie "equals" care primeste 2 parametrii si returneaza 
 * daca cei 2 parametrii sunt egali, strict.
 * */

function equals(first, second) {
    if (first === second) {
        return true
    }
    return false
}


/**
 * Exercise 2
 * O functie "compare" care primeste 2 parametrii si returneaza 
 * -1 daca primul e mai mic ca al doilea, 0 daca sunt egale si 
 * 1 daca primul e mai mare ca al doilea.
 * */

function compare(nrA, nrB) {
    if (nrA > nrB) {
        return 1;
    } else if (nrB > nrA) {
        return -1;
    }
    return 0;
}


/**
 * Exercise 3
 * O functie "max" care primeste 2 parametrii si returneaza maximul dintre cele 2.
 * */

function max(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}


/**
 * Exercise 4
 * O functie "min" care primeste 2 parametrii si returneaza minimul dintre cele 2.
 * */

function min(nr1, nr2) {
    if (nr1 < nr2) {
        return nr1;
    }
    return nr2;
}


/**
 * Exercise 5
 * O functie "suma" care primeste 1 parametru, numar intreg si returneaza 
 * suma primelor N numere naturale pozitive 
 * (exemplu: daca N este 3, trebuie sa returneze 6).
 * */

function suma(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum = sum + i;
    }
    return sum;
}


/**
 * Exercise 6
 * O functie "prim" care primeste 1 parametru si returneaza 
 * true/false daca N este numar prim sau nu 
 * (restul impartirii la 1 si la N ==0).
 * */

function prim(nr) {
    if (nr <= 1) {
        return false;
    }
    for (let i = 2; i < nr; i++) {
        if (nr % i === 0) {
            return false;
        }
    }
    return true;
}


/**
 * Exercise 7
 * O functie "sumaPrime" care primeste 1 parametru si returneaza 
 * suma primelor N numere prime 
 * (pentru N=5 trebuie sa returneze 2+3+5+7+11=28).
 * */

function sumaPrime(number) {
    let array = [];
    let result = 0;

    for (let i = 2; array.length < number; i++) {
        if (prim(i)) {
            array.push(i);
        }
    }
    for (let value in array) {
        result += array[value];
    }
    return result;
}


/**
 * Exercise 8
 * O functie "invers" care primeste un parametru de tip numar 
 * si intoarce inversul acestuia (ca numar) (123 => 321).
 * */

function invers(nr) {
    nr = nr + "";
    return Math.floor(nr.split("").reverse().join(""));
}


/**
 * Exercise 9
 * O functie "produsImpare" care primeste 1 parametru si returneaza 
 * produsul primelor N numere impare pozitive 
 * (pentru N=5; returneaza 1*3*5*7*9=945).
 * */

function produsImpare(number) {
    let array = [];
    let result = 1;

    for (let i = 0; array.length < number; i++) {
        if (i % 2 === 1) {
            array.push(i);
        }
    }
    for (let value in array) {
        result *= array[value];
    }
    return result;
}


/**
 * Exercise 10
 * O functie "contains" care primeste 2 parametri
 * (arr - array de nr intregi si x - numar) si verifica daca 
 * x exista in array (rezultatul este true/false)
 */

function contains(arr, x) {
    let result;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return result = true;
        }
        result = false;
    }
    return result;
}


/**
 * Exercise 11
 * O functie "maxArray" care primeste un array si returneaza 
 * valoarea maxima (ar trebui sa functioneze si pentru numere 
 * si pentru stringuri)
 */

function maxArray(arr) {
    let maxNr = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNr) {
            maxNr = arr[i];
        }
    }
    return maxNr;
}


/**
 * Exercise 12
 * O functie "sumMinMax" care primeste un array de numere 
 * si returneaza suma dintre valoare maxima si valoare minima
 */

function sumMinMax(arr) {
    let minNr = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNr) {
            minNr = arr[i];
        }
    }
    return maxArray(arr) + minNr;
}


/**
 * Exercise 13
 * O functie "hasDuplicates" care primeste un array si 
 * returneaza daca exista duplicate intr-un array primit 
 * ca parametru (true/false)
 */

function hasDuplicates(arr) {
    let result = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
            result = true;
        }
    }
    return result
}


/**
 * Exercise 14
 * O functie "produsPozitive" care primeste un array si 
 * returneaza produsul numerelor pozitive intr-un array primit ca parametru
 */

function produsPozitive(arr) {
    let sum = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum *= arr[i];
        }
    }
    return sum;
}


/**
 * Exercise 15
 * O functie "palindrom" care primeste un string si returneaza daca este 
 * palindrom (inversul == originalul, ex: "1234321", "55", "787") (true/false)
 */

function palindrom(value) {
    let leng = value.length;

    for (let i = 0; i < leng / 2; i++){
        if (value[i] !== value[leng - 1 - i]) {
            return false;
        }
    }
    return true;
}